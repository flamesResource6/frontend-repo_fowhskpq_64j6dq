import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Features />

      {/* Trusted by strip */}
      <section className="py-10 border-y border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-black/50 text-center">Trusted by teams using</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-70">
            {['OpenAI', 'Zapier', 'Airtable', 'HubSpot', 'Slack', 'Notion'].map((logo) => (
              <div key={logo} className="text-center text-sm font-semibold bg-black/5 rounded-lg py-3">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
          <p className="font-bold">Axiom Automations</p>
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Privacy</a>
            <a href="#" className="text-white/70 hover:text-white">Terms</a>
            <a href="#" className="inline-flex items-center rounded-full bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors">Get a demo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
