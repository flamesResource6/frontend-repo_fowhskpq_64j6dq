import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Work from './components/Work'
import Stats from './components/Stats'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Marquee from './components/Marquee'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <Stats />
      <Process />
      <Work />

      <Marquee />

      <Pricing />
      <CTA />

      {/* Footer */}
      <footer id="contact" className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
          <p className="font-bold">Axiom Automations</p>
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#pricing" className="text-white/70 hover:text-white">Pricing</a>
            <a href="#work" className="text-white/70 hover:text-white">Case studies</a>
            <a href="#cta" className="inline-flex items-center rounded-full bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors">Get a demo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
