import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedText } from '../ui/AnimatedText'
import { Maximize2, X } from 'lucide-react'

const galleryItems = [
  { id: 1, caption: 'Maktab hayoti', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { id: 2, caption: 'Sport musobaqalari', image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 3, caption: 'Ilmiy loyihalar', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 4, caption: 'Madaniyat tadbirlari', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 5, caption: 'O\'qituvchilar kuni', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
]

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Galereya</h2>
            <div className="w-20 h-1.5 bg-brand-yellow rounded-full mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item.image)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              <img 
                src={item.image} 
                alt={item.caption} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                  <h3 className="text-white text-xl font-bold">{item.caption}</h3>
                  <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-gray-900">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/90 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Kattalashtirilgan rasm"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
