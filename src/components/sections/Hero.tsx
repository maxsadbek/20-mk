import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { AnimatedText } from '../ui/AnimatedText'
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <AnimatedText delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 text-yellow-700 font-medium mb-6">
                <Trophy className="w-4 h-4" />
                <span>Eng ilg'or maktablardan biri</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Kelajakni <span className="text-brand-yellow">birgalikda</span> quramiz
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={0.3}>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Bizning maktabda farzandingiz zamonaviy bilim, yuksak tarbiya va yorqin kelajak poydevorini oladi.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" className="flex items-center gap-2 px-8 py-4 text-lg shadow-lg shadow-brand-yellow/30 hover:shadow-brand-yellow/50 transition-all">
                  Batafsil ma'lumot <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="secondary" className="px-8 py-4 text-lg">
                  Biz bilan bog'lanish
                </Button>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0 border-t border-gray-200 pt-8">
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-yellow mb-2">
                    <BookOpen className="w-6 h-6" />
                    <span className="text-3xl font-bold">50+</span>
                  </div>
                  <div className="text-gray-500 font-medium text-sm lg:text-base">Yillik tajriba</div>
                </div>
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-yellow mb-2">
                    <Users className="w-6 h-6" />
                    <span className="text-3xl font-bold">1200+</span>
                  </div>
                  <div className="text-gray-500 font-medium text-sm lg:text-base">O'quvchilar</div>
                </div>
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-yellow mb-2">
                    <Users className="w-6 h-6" />
                    <span className="text-3xl font-bold">80+</span>
                  </div>
                  <div className="text-gray-500 font-medium text-sm lg:text-base">O'qituvchilar</div>
                </div>
              </div>
            </AnimatedText>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-yellow rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
                alt="Maktab o'quvchilari" 
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px]"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Reyting</p>
                  <p className="font-bold text-gray-900">Top 10 maktab</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
