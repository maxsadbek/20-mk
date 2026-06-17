import React, { useState, useEffect } from 'react'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'

export const About: React.FC = () => {
  const [counts, setCounts] = useState({ students: 0, teachers: 0, years: 0 })

  useEffect(() => {
    const targetCounts = { students: 1200, teachers: 80, years: 50 }
    const duration = 2000
    const interval = 50
    const steps = duration / interval

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      setCounts({
        students: Math.floor(targetCounts.students * easeOutQuart),
        teachers: Math.floor(targetCounts.teachers * easeOutQuart),
        years: Math.floor(targetCounts.years * easeOutQuart),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targetCounts)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { label: 'O\'quvchilar', value: counts.students, suffix: '+' },
    { label: 'O\'qituvchilar', value: counts.teachers, suffix: '+' },
    { label: 'Yillik tajriba', value: counts.years, suffix: '+' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Biz haqimizda</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-text-secondary text-center leading-relaxed">
              20-maktab 1974-yildan beri o'z faoliyatini olib bormoqda. Bizning maktabimiz 
              zamonaviy ta'lim metodikalarini boy tarix va tajriba bilan birlashtirib, 
              o'quvchilarga sifatli bilim berishga intiladi. Bizning maqsadimiz - har bir 
              o'quvchining potentsialini ochish va ularni kelajakdagi muvaffaqiyatli 
              shaxslar sifatida tayyorlash.
            </p>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center">
              <AnimatedText delay={0.3 + index * 0.1}>
                <div className="text-5xl font-bold text-brand-yellow mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-text-secondary font-medium">{stat.label}</div>
              </AnimatedText>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
