import { useEffect, useMemo, useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Loader2,
  PlayCircle,
  ShoppingBasket,
  Sparkles,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'

function normalizeOptionalField(value) {
  if (value === null || value === undefined) return '—'
  const text = String(value).trim()
  if (!text || text.toLowerCase() === 'null') return '—'
  return text
}

function toDateValue(value) {
  if (!value) return null
  if (value instanceof Date) return value
  if (typeof value === 'number') return new Date(value)
  if (typeof value === 'string') {
    const parsed = new Date(value)
    return Number.isNaN(parsed.getTime()) ? null : parsed
  }
  if (typeof value?.toDate === 'function') {
    try {
      return value.toDate()
    } catch {
      return null
    }
  }
  return null
}

function titleCase(text) {
  return text
    .replace(/[_-]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

const ingredientCategoryDisplay = {
  fruitsAndVegetables: 'Fruits & Veggies',
  herbsAndSpices: 'Herbs & Spices',
  meat: 'Meat',
  poultry: 'Poultry',
  seafood: 'Seafood',
  eggs: 'Eggs',
  plantBasedProtein: 'Plant Protein',
  dairy: 'Dairy',
  grains: 'Grains',
  bread: 'Bread',
  bakingIngredients: 'Baking',
  sweeteners: 'Sweeteners',
  pantry: 'Pantry',
  sauces: 'Sauces',
  oils: 'Oils',
  vinegars: 'Vinegars',
  frozen: 'Frozen',
  drinks: 'Drinks',
  other: 'Other',
}

function normalizeCategoryToken(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, '')
}

function toCanonicalIngredientCategory(rawCategory) {
  const normalized = normalizeCategoryToken(rawCategory)

  switch (normalized) {
    case 'fruitsandvegetables':
    case 'fruitsveggies':
    case 'fruitsveg':
    case 'produce':
      return 'fruitsAndVegetables'
    case 'herbsandspices':
    case 'herbs':
    case 'spices':
      return 'herbsAndSpices'
    case 'meat':
      return 'meat'
    case 'poultry':
      return 'poultry'
    case 'seafood':
      return 'seafood'
    case 'eggs':
      return 'eggs'
    case 'plantbasedprotein':
    case 'plantprotein':
    case 'plantbased':
      return 'plantBasedProtein'
    case 'dairy':
      return 'dairy'
    case 'dairyalternatives':
    case 'dairyalternative':
    case 'grains':
      return 'grains'
    case 'bread':
      return 'bread'
    case 'bakingingredients':
    case 'bakingingredient':
    case 'baking':
      return 'bakingIngredients'
    case 'sweeteners':
    case 'sweetener':
      return 'sweeteners'
    case 'pantry':
      return 'pantry'
    case 'sauces':
    case 'sauce':
      return 'sauces'
    case 'vinegars':
    case 'vinegar':
      return 'vinegars'
    case 'oilsandvinegars':
    case 'oilsandvinegar':
    case 'oils':
    case 'oil':
      return 'oils'
    case 'frozen':
      return 'frozen'
    case 'drinks':
    case 'drink':
    case 'beverages':
    case 'alcohol':
      return 'drinks'
    case 'other':
    default:
      return 'other'
  }
}

function parseIngredientValue(value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return {
      category: toCanonicalIngredientCategory(value.category),
      quantity: String(value.quantity || '').trim(),
    }
  }

  const raw = String(value || '').trim()
  if (!raw) {
    return { category: 'other', quantity: '' }
  }

  const parts = raw.split('|').map((part) => part.trim())
  if (parts.length === 1) {
    return { category: toCanonicalIngredientCategory(parts[0]), quantity: '' }
  }

  return {
    category: toCanonicalIngredientCategory(parts[0]),
    quantity: parts.slice(1).join('|'),
  }
}

function normalizeIngredients(raw) {
  const grouped = new Map()

  if (!raw || typeof raw !== 'object') return []

  Object.entries(raw).forEach(([name, value]) => {
    const trimmedName = String(name || '').trim()
    if (!trimmedName) return

    const parsed = parseIngredientValue(value)
    const groupKey = parsed.category || 'other'
    const formattedItem = parsed.quantity ? `${parsed.quantity} ${trimmedName}` : trimmedName

    if (!grouped.has(groupKey)) {
      grouped.set(groupKey, [])
    }
    grouped.get(groupKey).push(formattedItem)
  })

  return Array.from(grouped.entries())
    .map(([group, items]) => ({
      title: ingredientCategoryDisplay[group] || titleCase(group),
      items: items.sort((a, b) => a.localeCompare(b)),
    }))
    .sort((a, b) => a.title.localeCompare(b.title))
}

function normalizeSteps(rawSteps, rawMethod) {
  const source = rawSteps ?? rawMethod
  if (!source) return []

  if (Array.isArray(source)) {
    return source
      .map((item) => {
        if (typeof item === 'string') {
          return { section: null, points: [item] }
        }
        if (!item || typeof item !== 'object') return null

        const points = Array.isArray(item.steps)
          ? item.steps.map((step) => String(step).trim()).filter(Boolean)
          : item.steps
            ? [String(item.steps).trim()].filter(Boolean)
            : []

        return {
          section: item.sectionTitle ? String(item.sectionTitle) : null,
          points,
        }
      })
      .filter((item) => item && item.points.length > 0)
  }

  if (source && typeof source === 'object') {
    const points = Array.isArray(source.steps)
      ? source.steps.map((step) => String(step).trim()).filter(Boolean)
      : source.steps
        ? [String(source.steps).trim()].filter(Boolean)
        : []

    if (!points.length) return []
    return [{ section: source.sectionTitle ? String(source.sectionTitle) : null, points }]
  }

  return []
}

function getSourceLabel(url, importType) {
  if (url) {
    try {
      const host = new URL(url).hostname.replace(/^www\./, '')
      return `Imported from ${host}`
    } catch {
      return 'Imported recipe'
    }
  }

  if (importType) {
    return `Imported from ${titleCase(String(importType))}`
  }

  return 'Imported recipe'
}

function mapRecipeDocument(shareId, data) {
  const ingredientGroups = normalizeIngredients(data.ingredients)
  const steps = normalizeSteps(data.steps, data.method)
  const rawUrl = data.url ? String(data.url).trim() : ''

  return {
    id: shareId,
    title: String(data.name || '').trim() || 'Untitled Recipe',
    imageUrl: data.thumbnailUrl ? String(data.thumbnailUrl).trim() : '',
    videoUrl: rawUrl,
    servings: normalizeOptionalField(data.servings),
    prep: normalizeOptionalField(data.prepTime),
    cook: normalizeOptionalField(data.cookTime),
    source: getSourceLabel(rawUrl, data.importType),
    ingredientGroups,
    steps,
  }
}

function LoadingState() {
  return (
    <main className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <section className="feature-card flex flex-col items-center justify-center text-center py-16">
          <Loader2 className="w-10 h-10 text-brand-orange animate-spin" />
          <h1 className="mt-5 font-display text-4xl text-brand-dark">Loading recipe...</h1>
          <p className="mt-2 text-brand-muted">
            Fetching shared recipe details from Receta. This usually takes a second.
          </p>
        </section>
      </div>
    </main>
  )
}

function LinkExpiredState() {
  return (
    <main className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <section className="feature-card text-center py-14 md:py-20">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
            <AlertCircle size={30} />
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-5xl text-brand-dark">Link Expired</h1>
          <p className="mt-3 text-brand-muted max-w-xl mx-auto leading-relaxed">
            This shared recipe link is no longer available. Shared links are valid for 2 days.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/" className="btn-primary !justify-center">
              Back to Receta Website
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              Download the app
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

function ErrorState({ onRetry }) {
  return (
    <main className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <section className="feature-card text-center py-14 md:py-20">
          <h1 className="font-display text-4xl text-brand-dark">Unable to Load Recipe</h1>
          <p className="mt-3 text-brand-muted">
            Something went wrong while fetching this shared recipe.
          </p>
          <button type="button" onClick={onRetry} className="btn-primary mt-6 !justify-center">
            Try Again
          </button>
        </section>
      </div>
    </main>
  )
}

export default function SharedRecipeFoundPage({ shareId }) {
  const [status, setStatus] = useState('loading')
  const [recipe, setRecipe] = useState(null)
  const [imageFailed, setImageFailed] = useState(false)
  const [refreshCount, setRefreshCount] = useState(0)

  const openInAppUrl = useMemo(() => `https://reecta-r.vercel.app/r/${shareId}`, [shareId])

  useEffect(() => {
    let cancelled = false

    async function loadRecipe() {
      setStatus('loading')
      setImageFailed(false)

      try {
        const sharedRecipeRef = doc(db, 'shared_recipes', shareId)
        const sharedRecipeSnap = await getDoc(sharedRecipeRef)

        if (!sharedRecipeSnap.exists()) {
          if (!cancelled) setStatus('expired')
          return
        }

        const data = sharedRecipeSnap.data()
        const expiresAt = toDateValue(data.expiredAt)
        if (expiresAt && expiresAt.getTime() <= Date.now()) {
          if (!cancelled) setStatus('expired')
          return
        }

        const mappedRecipe = mapRecipeDocument(shareId, data)
        if (!cancelled) {
          setRecipe(mappedRecipe)
          setStatus('ready')
        }
      } catch (error) {
        console.error('Failed to fetch shared recipe:', error)
        if (!cancelled) setStatus('error')
      }
    }

    loadRecipe()
    return () => {
      cancelled = true
    }
  }, [shareId, refreshCount])

  if (status === 'loading') return <LoadingState />
  if (status === 'expired') return <LinkExpiredState />
  if (status === 'error') return <ErrorState onRetry={() => setRefreshCount((count) => count + 1)} />
  if (!recipe) return <LinkExpiredState />

  const hasImage = Boolean(recipe.imageUrl) && !imageFailed
  const hasVideoUrl = Boolean(recipe.videoUrl)
  const ingredientGroups =
    recipe.ingredientGroups.length > 0
      ? recipe.ingredientGroups
      : [{ title: 'Ingredients', items: ['No ingredients listed for this recipe yet.'] }]
  const recipeSteps =
    recipe.steps.length > 0
      ? recipe.steps
      : [{ section: null, points: ['No instructions available yet for this shared recipe.'] }]

  return (
    <main className="pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <section className="text-center">
          <span className="pill bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            Shared with you
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-brand-dark leading-tight">
            A friend shared a recipe with you
          </h1>
          <p className="mt-3 text-brand-muted max-w-2xl mx-auto">
            Preview it on web, then open in Receta to save, organize, and cook with step-by-step mode.
          </p>
        </section>

        <section className="relative rounded-3xl overflow-hidden shadow-[0_22px_60px_rgba(26,18,8,0.22)]">
          {hasVideoUrl ? (
            <div className="absolute inset-x-0 top-4 md:top-6 z-20 flex justify-center px-4">
              <a
                href={recipe.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-black/65 backdrop-blur-sm text-white border border-white/30 px-4 py-2 text-sm font-semibold hover:bg-black/75 transition-colors"
                aria-label="Open source video in a new tab"
              >
                <PlayCircle size={16} />
                Watch Recipe Video
              </a>
            </div>
          ) : null}
          {hasImage ? (
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="w-full h-[320px] md:h-[460px] object-cover"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="w-full h-[320px] md:h-[460px] bg-[#DAD6D4] flex items-center justify-center">
              <div className="w-24 h-24 rounded-3xl bg-white/55 border border-white/80 flex items-center justify-center">
                <UtensilsCrossed size={36} className="text-brand-orange" />
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-9 text-white">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Recipe Preview
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight">{recipe.title}</h2>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm md:text-base text-white/90">
              <span className="inline-flex items-center gap-1.5">
                <Users size={16} />
                Servings: {recipe.servings}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={16} />
                Prep: {recipe.prep}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <UtensilsCrossed size={16} />
                Cook: {recipe.cook}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <PlayCircle size={16} />
                {recipe.source}
              </span>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
          <div className="space-y-6">
            <section className="feature-card">
              <div className="flex items-center gap-2">
                <ShoppingBasket size={18} className="text-brand-orange" />
                <h3 className="text-2xl font-display text-brand-dark">Ingredients</h3>
              </div>
              <div className="mt-5 grid md:grid-cols-2 gap-4">
                {ingredientGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-black/5 bg-brand-cream/55 p-5 md:p-6"
                  >
                    <h4 className="font-semibold text-brand-orange mb-3">{group.title}</h4>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-brand-muted text-sm md:text-base pb-2 border-b last:border-b-0 border-black/5"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="feature-card">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-brand-orange" />
                <h3 className="text-2xl font-display text-brand-dark">Instructions</h3>
              </div>
              <div className="mt-5 space-y-5">
                {recipeSteps.map((stepGroup) => (
                  <div key={stepGroup.section || stepGroup.points.join('-')}>
                    {stepGroup.section ? (
                      <h4 className="inline-flex rounded-lg bg-brand-cream px-3 py-1.5 text-brand-dark font-semibold">
                        {stepGroup.section}
                      </h4>
                    ) : null}
                    <ol className="mt-3 space-y-3">
                      {stepGroup.points.map((point, index) => (
                        <li key={point} className="flex items-start gap-3 text-brand-muted leading-relaxed">
                          <span className="mt-1 h-6 w-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="feature-card sticky top-28">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto">
                <UtensilsCrossed size={24} />
              </div>
              <h3 className="mt-4 text-3xl lg:text-2xl font-display text-brand-dark text-center leading-tight">
                Cook this in the Receta app
              </h3>
              <p className="mt-3 text-brand-muted text-center text-sm leading-relaxed">
                Save this recipe, auto-build grocery lists, and follow step mode hands-free.
              </p>

              <a
                href={openInAppUrl}
                className="btn-primary mt-6 w-full !justify-center"
                aria-label="Open recipe in Receta app"
              >
                Open in Receta
              </a>
              <a
                href="#"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold text-brand-dark hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                Download the app
              </a>

              <div className="mt-7 pt-6 border-t border-black/10">
                <p className="font-semibold text-brand-dark">Why Receta?</p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    'Import recipes from links in one tap.',
                    'Hands-free cook mode for messy kitchens.',
                    'Smart shopping lists sorted by aisle.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                      <CheckCircle2 size={16} className="text-brand-orange mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
