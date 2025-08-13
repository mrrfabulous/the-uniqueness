"use client"

import { motion } from 'framer-motion'
import { useCounter } from '@/hooks/use-counter'

interface StatItemProps {
  value: number
  label: string
  suffix?: string
  delay?: number
}

function StatItem({ value, label, suffix = "", delay = 0 }: StatItemProps) {
  const { count, ref } = useCounter({ end: value, duration: 2500 })

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-700 font-medium">{label}</div>
    </motion.div>
  )
}

export function AnimatedStats() {
  return (
    <motion.section 
      className="py-16 bg-amber-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <StatItem value={200} label="Children Supported" suffix="+" delay={0.1} />
          <StatItem value={8} label="Communities Reached" suffix="+" delay={0.2} />
          <StatItem value={25} label="Active Volunteers" suffix="+" delay={0.3} />
          <StatItem value={2} label="Years of Impact" suffix="+" delay={0.4} />
        </motion.div>
      </div>
    </motion.section>
  )
}
