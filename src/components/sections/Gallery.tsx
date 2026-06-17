import React from 'react'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'

const galleryItems = [
  { id: 1, caption: 'Maktab hayoti' },
  { id: 2, caption: 'Sport musobaqalari' },
  { id: 3, caption: 'Ilmiy loyihalar' },
  { id: 4, caption: 'Madaniyat tadbirlari' },
  { id: 5, caption: 'O\'qituvchilar kuni' },
  { id: 6, caption: 'Bitiruv marosimi' },
]

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Galereya</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden p-0">
              <AnimatedText delay={index * 0.1}>
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <p className="text-text-secondary font-medium">{item.caption}</p>
                </div>
              </AnimatedText>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
