import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'
import { Award, Target, BookOpen } from 'lucide-react'

export const About: React.FC = () => {
  const [counts, setCounts] = useState({ students: 0, teachers: 0, years: 0 })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return;
    
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
  }, [isInView])

  const stats = [
    { label: 'O\'quvchilar', value: counts.students, suffix: '+', icon: <BookOpen className="w-8 h-8" /> },
    { label: 'O\'qituvchilar', value: counts.teachers, suffix: '+', icon: <Target className="w-8 h-8" /> },
    { label: 'Yillik tajriba', value: counts.years, suffix: '+', icon: <Award className="w-8 h-8" /> },
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="flex-1">
            <AnimatedText>
              <div className="mb-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Biz haqimizda</h2>
                <div className="w-20 h-1.5 bg-brand-yellow rounded-full"></div>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                20-maktab 1974-yildan beri o'z faoliyatini olib bormoqda. Bizning maktabimiz 
                zamonaviy ta'lim metodikalarini boy tarix va tajriba bilan birlashtirib, 
                o'quvchilarga sifatli bilim berishga intiladi.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Bizning maqsadimiz - har bir o'quvchining potentsialini ochish va ularni kelajakdagi muvaffaqiyatli shaxslar sifatida tayyorlash. Katta va yorug' sinfxonalari, zamonaviy laboratoriyalar va tajribali ustozlar jamoasi bizning eng katta yutug'imizdir.
              </p>
            </AnimatedText>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <AnimatedText key={stat.label} delay={0.3 + index * 0.1}>
                  <Card className="text-center p-6 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-2xl group">
                    <div className="flex justify-center text-brand-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </Card>
                </AnimatedText>
              ))}
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="flex-1 w-full relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                alt="Maktab binosi" 
                className="rounded-3xl object-cover w-full h-[300px] shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="O'quvchilar" 
                className="rounded-3xl object-cover w-full h-[300px] shadow-lg -mt-8"
              />
              <div className="col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-319ce8372605?q=80&w=2070&auto=format&fit=crop" 
                  alt="Kutubxona" 
                  className="rounded-3xl object-cover w-full h-[250px] shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
