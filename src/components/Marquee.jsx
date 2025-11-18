import { motion } from 'framer-motion'

const logos = ['OpenAI', 'Zapier', 'Airtable', 'HubSpot', 'Slack', 'Notion', 'Segment', 'Vercel', 'Snowflake', 'AWS']

export default function Marquee() {
  const items = [...logos, ...logos]
  return (
    <div className="relative overflow-hidden border-y border-black/5 bg-white py-8">
      <motion.div
        className="flex gap-6"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {items.map((logo, i) => (
          <div key={logo + i} className="text-sm font-semibold bg-black/5 rounded-lg px-4 py-2">
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
