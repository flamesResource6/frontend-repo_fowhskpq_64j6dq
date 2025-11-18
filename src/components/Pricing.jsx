import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Pilot',
    price: '$8k',
    desc: '2-3 week engagement to ship a production pilot with dashboard.',
    features: ['Workflow audit', '1 core automation', 'Guardrails + QA', 'Weekly reviews']
  },
  {
    name: 'Scale',
    price: '$18k/mo',
    desc: 'Ongoing roadmap, new automations, and SLO-backed reliability.',
    features: ['Prioritized backlog', '3+ automations/mo', 'Monitoring & alerts', 'On-call support']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For complex environments needing security reviews and SLAs.',
    features: ['Security & compliance', 'Custom integrations', 'Dedicated team', 'Executive reporting']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">Engagements</h2>
          <p className="mt-3 text-black/70">Transparent packages designed to get results fast.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl border border-black/10 p-6 ${i === 1 ? 'bg-black text-white' : 'bg-white'}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className={`text-xl font-bold ${i === 1 ? 'text-white' : 'text-black'}`}>{t.name}</h3>
                <div className={`text-2xl font-extrabold ${i === 1 ? 'text-red-400' : 'text-red-700'}`}>{t.price}</div>
              </div>
              <p className={`mt-2 ${i === 1 ? 'text-white/80' : 'text-black/70'}`}>{t.desc}</p>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 ${i === 1 ? 'text-red-400' : 'text-red-600'}`} size={18} />
                    <span className={`${i === 1 ? 'text-white/90' : 'text-black/80'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full h-11 rounded-lg font-semibold transition-colors ${i === 1 ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-black text-white hover:bg-black/90'}`}>Start {t.name}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
