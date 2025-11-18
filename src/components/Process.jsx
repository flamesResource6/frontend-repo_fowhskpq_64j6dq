import { motion } from 'framer-motion'
import { ClipboardCheck, PlugZap, Wrench, Gauge } from 'lucide-react'

const steps = [
  { icon: ClipboardCheck, title: 'Discovery & audit', desc: 'Map workflows, identify bottlenecks and quick wins.' },
  { icon: PlugZap, title: 'Design & integrate', desc: 'Blueprint data flows, select models, connect systems.' },
  { icon: Wrench, title: 'Build & validate', desc: 'Implement guardrails, QA scenarios, and stakeholder sign-off.' },
  { icon: Gauge, title: 'Launch & scale', desc: 'Rollout with dashboards, alerts and continuous tuning.' }
]

export default function Process() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">How we work</h2>
          <p className="mt-3 text-white/70">A crisp, battle-tested delivery flow that prioritizes speed and reliability.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 p-6 bg-white/5 overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-red-600/20 blur-2xl" />
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
