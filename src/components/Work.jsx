import { CheckCircle2 } from 'lucide-react'

const cases = [
  {
    company: 'Ecommerce Brand',
    impact: '−42% manual tickets',
    bullets: [
      'AI triage replies in Helpdesk',
      'Auto‑tagging and prioritization',
      'Weekly QA and drift monitoring'
    ]
  },
  {
    company: 'B2B SaaS',
    impact: '+18% conversion on inbound',
    bullets: [
      'Lead enrichment and scoring',
      'Routing to right owner instantly',
      'Meeting scheduling with guardrails'
    ]
  },
  {
    company: 'Ops Team',
    impact: '120 hrs saved / month',
    bullets: [
      'Invoice checks & reconciliation',
      'Automated reporting to Slack',
      'Exceptions escalated with context'
    ]
  }
]

function Work() {
  return (
    <section id="work" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">Recent wins</h2>
          <p className="mt-3 text-black/70">A snapshot of outcomes we delivered across support, sales and ops.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.company} className="rounded-2xl border border-black/10 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{c.company}</h3>
                <span className="inline-flex items-center text-sm font-semibold text-red-700 bg-red-50 border border-red-200 rounded-full px-3 py-1">{c.impact}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-black/80">
                    <CheckCircle2 className="mt-0.5 text-red-600" size={18} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
