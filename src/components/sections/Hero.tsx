import React from 'react'
import { Button } from '../ui/Button'
import { AnimatedText } from '../ui/AnimatedText'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedText delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6">
            20-maktab
          </h1>
        </AnimatedText>
        
        <AnimatedText delay={0.2}>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Bilim, tarbiya va kelajak uchun eng yaxshi boshlang'ich
          </p>
        </AnimatedText>
        
        <AnimatedText delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">Batafsil ma'lumot</Button>
            <Button variant="secondary">Biz bilan bog'lanish</Button>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-yellow mb-2">50+</div>
              <div className="text-text-secondary">Yillik tajriba</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-yellow mb-2">1200+</div>
              <div className="text-text-secondary">O'quvchilar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-yellow mb-2">80+</div>
              <div className="text-text-secondary">O'qituvchilar</div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </section>
  )
}
