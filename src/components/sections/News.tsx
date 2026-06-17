import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'

export const News: React.FC = () => {
  const newsItems = useAppSelector((state) => state.news.items)

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Yangiliklar</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-200">
              <AnimatedText delay={index * 0.1}>
                <div className="mb-4">
                  <span className="text-sm text-brand-yellow font-medium">
                    {new Date(item.date).toLocaleDateString('uz-UZ', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary line-clamp-3">
                  {item.description}
                </p>
              </AnimatedText>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
