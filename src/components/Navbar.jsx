import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-black flex items-center justify-center">
            <span className="text-white font-black">A</span>
          </div>
          <span className="font-extrabold tracking-tight text-xl">Axiom Automations</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="text-black/70 hover:text-black transition-colors">Services</a>
          <a href="#solutions" className="text-black/70 hover:text-black transition-colors">Solutions</a>
          <a href="#work" className="text-black/70 hover:text-black transition-colors">Work</a>
          <a href="#contact" className="text-black/70 hover:text-black transition-colors">Contact</a>
          <a href="#cta" className="inline-flex items-center rounded-full bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors">Get a demo</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 text-black">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
