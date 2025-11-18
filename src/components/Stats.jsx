import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { label: 'Hours saved', value: 12400, suffix: '+' },
  { label: 'Automations shipped', value: 180, suffix: '+' },
  { label: 'Uptime', value: 99.95, suffix: '%' },
  { label: 'Teams enabled', value: 45, suffix: '+' }
]

function AnimatedNumber({ to, duration = 1.6, prefix = '', suffix = '' }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (inView) {
      controls.start({ count: to, transition: { duration, ease: 'easeOut' } })
    }
  }, [inView, controls, to, duration])

  return (
    <motion.span ref={ref} initial={{ count: 0 }} animate={controls}>
      <motion.span>
        {({ count }) => prefix + new Intl.NumberFormat().format(Number(count).toFixed(0)) + suffix}
      </motion.span>
    </motion.span>
  )
}

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">Proof in the numbers</h2>
          <p className="mt-3 text-black/70">Outcomes from live systems running in production.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-black/10 p-6 text-center bg-white"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-black">
                <AnimatedNumber to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-black/60 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
