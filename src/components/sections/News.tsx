import React from 'react'
import { motion } from 'framer-motion'
import { useAppSelector } from '../../store/hooks'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'
import { Calendar, ArrowRight } from 'lucide-react'

// Placeholder images for news
const newsImages = [
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1427504494785-319ce8372605?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
]

export const News: React.FC = () => {
  const newsItems = useAppSelector((state) => state.news.items)

  return (
    <section id="news" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">So'nggi yangiliklar</h2>
            <div className="w-20 h-1.5 bg-brand-yellow rounded-full mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group overflow-hidden border-0 bg-white p-0 flex flex-col rounded-2xl">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={newsImages[index % newsImages.length]} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-yellow flex items-center gap-1 shadow-sm">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.date).toLocaleDateString('uz-UZ', {
                      day: 'numeric',
                      month: 'short'
                    })}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-brand-yellow font-medium group-hover:gap-2 transition-all cursor-pointer">
                    <span>Batafsil o'qish</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
