import {
  CheckCircle2,
  Clock3,
  PlayCircle,
  ShoppingBasket,
  Sparkles,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import recipeHeroImage from '../assets/IMG_6805.webp'

const recipe = {
  title: 'Classic Eggs Benedict',
  subtitle:
    'A brunch classic with toasted muffins, Canadian bacon, poached eggs, and silky hollandaise.',
  image: recipeHeroImage,
  servings: '2',
  prep: '15m',
  cook: '10m',
  source: 'Imported from YouTube',
  ingredientGroups: [
    {
      title: 'Dairy & Eggs',
      items: ['4 large eggs', '1/2 cup unsalted butter', '3 egg yolks', 'Splash of heavy cream'],
    },
    {
      title: 'Bread & Meat',
      items: ['2 English muffins', '4 slices Canadian bacon'],
    },
    {
      title: 'Produce & Pantry',
      items: ['1 tbsp lemon juice', 'Pinch of cayenne pepper', 'Fresh chives', '1 tsp white vinegar'],
    },
  ],
  steps: [
    {
      section: 'The Hollandaise',
      points: [
        'Melt the butter in a small saucepan. Blend yolks, lemon juice, and cayenne.',
        'Slowly drizzle in warm butter while blending until thick and creamy.',
      ],
    },
    {
      section: 'The Eggs',
      points: [
        'Bring water to a gentle simmer, add vinegar, then crack eggs into ramekins.',
        'Create a gentle whirlpool and poach eggs for 3 to 4 minutes.',
      ],
    },
    {
      section: 'Assembly',
      points: [
        'Toast muffins and top with Canadian bacon, poached eggs, and hollandaise. Finish with chives.',
      ],
    },
  ],
}

export default function SharedRecipeFoundPage({ shareId }) {
  const openInAppUrl = `https://reecta-r.vercel.app/r/${shareId}`

  return (
    <main className="pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <section className="text-center reveal">
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

        <section className="relative rounded-3xl overflow-hidden shadow-[0_22px_60px_rgba(26,18,8,0.22)] reveal">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-[320px] md:h-[460px] object-cover"
          />
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
            <section className="feature-card reveal">
              <div className="flex items-center gap-2">
                <ShoppingBasket size={18} className="text-brand-orange" />
                <h3 className="text-2xl font-display text-brand-dark">Ingredients</h3>
              </div>
              <div className="mt-5 grid md:grid-cols-2 gap-4">
                {recipe.ingredientGroups.map((group) => (
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

            <section className="feature-card reveal">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-brand-orange" />
                <h3 className="text-2xl font-display text-brand-dark">Instructions</h3>
              </div>
              <div className="mt-5 space-y-5">
                {recipe.steps.map((stepGroup) => (
                  <div key={stepGroup.section}>
                    <h4 className="inline-flex rounded-lg bg-brand-cream px-3 py-1.5 text-brand-dark font-semibold">
                      {stepGroup.section}
                    </h4>
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
            <div className="feature-card sticky top-28 reveal">
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
