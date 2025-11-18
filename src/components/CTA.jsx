function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-red-700"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Ready to automate your next growth leap?</h2>
          <p className="mt-4 text-white/80">Tell us your processes and tools. We’ll propose a roadmap and ship a working pilot fast.</p>
          <form className="mt-8 grid sm:grid-cols-3 gap-3">
            <input type="email" placeholder="Work email" className="col-span-2 h-12 px-4 rounded-lg bg-white/95 text-black placeholder-black/60 outline-none focus:ring-2 ring-red-400" />
            <button className="h-12 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors">Get a strategy deck</button>
          </form>
          <p className="mt-3 text-xs text-white/70">By submitting, you agree to our terms. We respect your inbox.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
