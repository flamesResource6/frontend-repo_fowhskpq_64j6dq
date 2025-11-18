import { Brain, PlugZap, ShieldCheck, Settings2 } from 'lucide-react'

const solutions = [
  {
    icon: Brain,
    title: 'AI Assistants',
    desc: 'Custom GPT workflows that draft emails, summarize calls, and recommend next steps.'
  },
  {
    icon: PlugZap,
    title: 'System Integrations',
    desc: 'Connect CRMs, ERPs, data warehouses, and internal tools with resilient pipelines.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Compliance',
    desc: 'Guardrails, approvals, and audit logs so automations stay accurate and compliant.'
  },
  {
    icon: Settings2,
    title: 'Operations Automation',
    desc: 'Ticket triage, lead routing, billing checks, and report generation on autopilot.'
  }
]

function Solutions() {
  return (
    <section id="solutions" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Solutions we ship</h2>
          <p className="mt-3 text-white/70">Pre‑built modules tailored to your stack, delivered with enterprise polish.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
