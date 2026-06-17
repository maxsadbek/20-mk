import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'
import { BookOpen, Star } from 'lucide-react'

const teachers = [
  { id: 1, name: 'Karimova Gulnora', subject: 'Matematika', image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop" },
  { id: 2, name: 'Rashidov Aziz', subject: 'Fizika', image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop" },
  { id: 3, name: 'Norova Malika', subject: 'Kimyo', image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1170&auto=format&fit=crop" },
  { id: 4, name: 'Toshmatov Bekzod', subject: 'Biologiya', image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop" },
  { id: 5, name: 'Qodirova Nilufar', subject: 'Ingliz tili', image: "https://images.unsplash.com/photo-1594824436998-058b233a1851?q=80&w=870&auto=format&fit=crop" },
  { id: 6, name: 'Saidov Jasur', subject: 'Tarix', image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop" },
]

export const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Tajribali o'qituvchilarimiz</h2>
            <div className="w-20 h-1.5 bg-brand-yellow rounded-full mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden bg-white/50 backdrop-blur-sm rounded-2xl p-8">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-yellow/20 to-transparent"></div>
                
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {teacher.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 text-brand-yellow font-medium mb-4 bg-brand-yellow/10 py-1.5 px-4 rounded-full w-max mx-auto">
                  <BookOpen className="w-4 h-4" />
                  {teacher.subject}
                </div>
                
                <div className="flex justify-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
