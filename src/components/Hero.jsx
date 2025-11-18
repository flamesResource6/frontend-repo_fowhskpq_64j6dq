import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>AI Automation Studio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-[1.05]">
            Launch automations that work while you sleep
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-black/70">
            We design, build and maintain high‑impact AI systems that remove busywork, integrate your tools, and scale operations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-colors">Book strategy call</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 font-semibold hover:bg-black hover:text-white transition-colors">See case studies</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
