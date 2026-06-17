import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'
import { Trophy, Star, Medal, Lightbulb } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: 'Respublika olimpiadasi g\'oliblari',
    description: 'Matematika va fizika bo\'yicha respublika olimpiadalarida o\'quvchilarimiz yuqori o\'rinlarni egalladi.',
    year: '2024',
    icon: <Trophy className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Eng yaxshi maktab nominatsiyasi',
    description: 'Viloyat miqyosida "Yilning eng yaxshi maktabi" nominatsiyasi sovrindori.',
    year: '2023',
    icon: <Star className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Xalqaro tanlovlar',
    description: 'O\'quvchilarimiz xalqaro bilim va sport tanlovlarida muvaffaqiyatli ishtirok etdi.',
    year: '2023',
    icon: <Medal className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'Innovatsion loyihalar',
    description: 'Maktabimiz o\'qituvchilari innovatsion ta\'lim metodikalari bo\'yicha grant yutdi.',
    year: '2022',
    icon: <Lightbulb className="w-6 h-6" />
  },
]

export const Achievements: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Bizning yutuqlarimiz</h2>
            <div className="w-20 h-1.5 bg-brand-yellow rounded-full mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group bg-white relative overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-yellow group-hover:w-full transition-all duration-500 opacity-10"></div>
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-yellow group-hover:text-white">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-yellow transition-colors">
                        {achievement.title}
                      </h3>
                    </div>
                    <span className="inline-block text-xs font-bold text-brand-yellow bg-yellow-50 px-3 py-1 rounded-full mb-3 border border-yellow-200">
                      {achievement.year}
                    </span>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
