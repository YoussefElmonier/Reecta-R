export default function PrivacyPolicyPage() {
  return (
    <main className="pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <section className="text-center">
          <span className="pill bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-brand-dark leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-brand-muted">
            Last updated: <span className="font-semibold text-brand-dark">March 14, 2026</span>
          </p>
        </section>

        <section className="feature-card mt-8 md:mt-10">
          <div className="space-y-8 text-brand-muted leading-relaxed">
            <p>
              This Privacy Policy describes how <strong className="text-brand-dark">Receta</strong> (the
              Application) collects, uses, and protects information when you use the mobile application
              developed by <strong className="text-brand-dark">Omar Elmanzalawy</strong> (Service Provider).
            </p>
            <p>
              By using the Application, you agree to the collection and use of information in accordance
              with this Privacy Policy.
            </p>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Information Collection and Use</h2>
              <p>The Application collects certain information automatically when you use it. This may include:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Your device&apos;s Internet Protocol (IP) address</li>
                <li>Device type and operating system</li>
                <li>Application usage information (such as screens visited and time spent in the app)</li>
                <li>Diagnostic and crash data used to improve stability and performance</li>
              </ul>
              <p className="mt-3">This information is used to operate and improve the Application.</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Anonymous Accounts</h2>
              <p>The Application uses anonymous authentication provided by Firebase.</p>
              <p className="mt-3">
                When you first use the Application, a randomly generated user identifier (UID) is created.
                This identifier is used to associate your recipes and app data with your device.
              </p>
              <p className="mt-3">
                The Application does not require users to provide personal information such as name, email
                address, or phone number to access core features.
              </p>
              <p className="mt-3">
                Users may optionally link their account to additional authentication providers in order to
                enable account recovery or backup features.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">User-Generated Content</h2>
              <p>The Application allows users to create and store content such as:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Recipes</li>
                <li>Ingredients</li>
                <li>Cooking steps</li>
                <li>Shopping list items</li>
                <li>Recipe collections</li>
                <li>Recipe links from websites or social media platforms</li>
              </ul>
              <p className="mt-3">
                This information is stored securely and used only to provide the core functionality of the
                Application.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Artificial Intelligence Processing</h2>
              <p>The Application may process user-submitted content such as:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Recipe links</li>
                <li>Videos</li>
                <li>Text</li>
                <li>Images</li>
              </ul>
              <p className="mt-3">
                Automated technologies, including artificial intelligence, may be used to analyze this
                content in order to generate structured recipe information such as ingredients, cooking steps,
                preparation time, and other recipe details.
              </p>
              <p className="mt-3">
                This processing is performed solely to provide the recipe extraction features of the
                Application.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Third-Party Services</h2>
              <p>
                The Application relies on trusted third-party services to operate and improve the product.
                These services may collect limited information necessary to perform their functions.
              </p>
              <p className="mt-3">Third-party services used by the Application include:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Google Firebase (Authentication, Firestore, Analytics, Crashlytics, Cloud Messaging)</li>
              </ul>
              <p className="mt-3">These services have their own privacy policies regarding data handling.</p>
              <p className="mt-3">
                Learn more:{' '}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange font-semibold hover:underline"
                >
                  firebase.google.com/support/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Data Storage</h2>
              <p>
                Data generated while using the Application may be stored securely in cloud infrastructure in
                order to provide core functionality.
              </p>
              <p className="mt-3">This may include:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Saved recipes</li>
                <li>Recipe metadata</li>
                <li>Shopping lists</li>
                <li>User preferences</li>
                <li>Application usage data</li>
              </ul>
              <p className="mt-3">This information is associated with your anonymous user identifier.</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Data Retention</h2>
              <p>
                User-generated data is retained for as long as the user continues to use the Application.
              </p>
              <p className="mt-3">
                If you choose to delete your account, all associated data including recipes, collections, and
                shopping lists will be permanently deleted from our systems.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Children&apos;s Privacy</h2>
              <p>The Application is not intended for use by children under the age of 13.</p>
              <p className="mt-3">
                The Service Provider does not knowingly collect personal information from children under 13.
                If it is discovered that such information has been provided, it will be deleted promptly.
              </p>
              <p className="mt-3">
                Parents or guardians who believe their child has provided information should contact the
                Service Provider.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Security</h2>
              <p>
                The Service Provider takes reasonable measures to protect the security of user information.
              </p>
              <p className="mt-3">
                These measures include the use of secure cloud infrastructure, encryption, and restricted
                access to stored data.
              </p>
              <p className="mt-3">
                However, no method of electronic storage or transmission over the internet is completely
                secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Changes to This Privacy Policy</h2>
              <p>This Privacy Policy may be updated from time to time.</p>
              <p className="mt-3">
                When changes occur, the updated Privacy Policy will be posted and the Last updated date will
                be revised.
              </p>
              <p className="mt-3">
                Continued use of the Application after changes indicates acceptance of the updated Privacy
                Policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Your Consent</h2>
              <p>
                By using the Application, you consent to the collection and use of information as described in
                this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-brand-dark mb-3">Contact</h2>
              <p>If you have any questions regarding privacy or this Privacy Policy, you may contact:</p>
              <p className="mt-3">
                <strong className="text-brand-dark">Omar Elmanzalawy</strong>
                <br />
                Email:{' '}
                <a
                  href="mailto:omarmanz2002@gmail.com"
                  className="text-brand-orange font-semibold hover:underline"
                >
                  omarmanz2002@gmail.com
                </a>
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
