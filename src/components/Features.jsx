import { Zap, Workflow, LineChart } from 'lucide-react'

const items = [
  {
    icon: Zap,
    title: 'Speed to value',
    desc: 'From audit to live automation in under 3 weeks with battle‑tested patterns.'
  },
  {
    icon: Workflow,
    title: 'Seamless integrations',
    desc: 'We connect CRMs, data warehouses, LLMs and internal tools into one flow.'
  },
  {
    icon: LineChart,
    title: 'Measurable ROI',
    desc: 'Dashboards that track time saved, errors reduced and revenue enabled.'
  }
]

function Features() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">What we deliver</h2>
          <p className="mt-3 text-black/70">Practical automations engineered for reliability, visibility and scale.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 p-6 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-black/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
