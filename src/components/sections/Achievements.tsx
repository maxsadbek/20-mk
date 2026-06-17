import React from 'react'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'

const achievements = [
  {
    id: 1,
    title: 'Respublika olimpiadasi g\'oliblari',
    description: 'Matematika va fizika bo\'yicha respublika olimpiadalarida o\'quvchilarimiz yuqori o\'rinlarni egalladi.',
    year: '2024',
  },
  {
    id: 2,
    title: 'Eng yaxshi maktab nominatsiyasi',
    description: 'Viloyat miqyosida \"Yilning eng yaxshi maktabi\" nominatsiyasi sovrindori.',
    year: '2023',
  },
  {
    id: 3,
    title: 'Xalqaro tanlovlar',
    description: 'O\'quvchilarimiz xalqaro bilim va sport tanlovlarida muvaffaqiyatli ishtirok etdi.',
    year: '2023',
  },
  {
    id: 4,
    title: 'Innovatsion loyihalar',
    description: 'Maktabimiz o\'qituvchilari innovatsion ta\'lim metodikalari bo\'yicha grant yutdi.',
    year: '2022',
  },
]

export const Achievements: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Yutuqlar</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={achievement.id} className="border-l-4 border-brand-yellow">
              <AnimatedText delay={index * 0.1}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {achievement.title}
                  </h3>
                  <span className="text-sm text-brand-yellow font-medium bg-yellow-50 px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-text-secondary">{achievement.description}</p>
              </AnimatedText>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
