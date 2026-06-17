import React from 'react'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'

const teachers = [
  { id: 1, name: 'Karimova Gulnora', subject: 'Matematika' },
  { id: 2, name: 'Rashidov Aziz', subject: 'Fizika' },
  { id: 3, name: 'Norova Malika', subject: 'Kimyo' },
  { id: 4, name: 'Toshmatov Bekzod', subject: 'Biologiya' },
  { id: 5, name: 'Qodirova Nilufar', subject: 'Ingliz tili' },
  { id: 6, name: 'Saidov Jasur', subject: 'Tarix' },
]

export const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">O\'qituvchilar</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={teacher.id} className="text-center">
              <AnimatedText delay={index * 0.1}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {teacher.name}
                </h3>
                <p className="text-brand-yellow font-medium">{teacher.subject}</p>
              </AnimatedText>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
