import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { AnimatedText } from '../ui/AnimatedText'
import { ContactFormData } from '../../types'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Ism kamida 2 ta belgidan iborat bo\'lishi kerak'),
  email: z.string().email('Noto\'g\'ri email formati'),
  phone: z.string().min(9, 'Telefon raqami kamida 9 ta belgidan iborat bo\'lishi kerak'),
  message: z.string().min(10, 'Xabar kamida 10 ta belgidan iborat bo\'lishi kerak'),
})

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submitted:', data)
    alert('Xabaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.')
    reset()
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Aloqa</h2>
            <div className="w-20 h-1.5 bg-brand-yellow rounded-full mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <AnimatedText delay={0.2}>
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 h-full border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Biz bilan bog'laning
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-brand-yellow group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Manzil</h4>
                    <p className="text-gray-600">
                      Toshkent shahri, Yunusobod tumani,<br />
                      20-maktab binosi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6 text-brand-yellow group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600 font-medium">+998 71 123 45 67</p>
                    <p className="text-gray-500 text-sm mt-1">Dushanba - Juma, 08:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6 text-brand-yellow group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 font-medium">info@20maktab.uz</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <Card className="p-8 lg:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 rounded-3xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Ism"
                    placeholder="Ismingizni kiriting"
                    {...register('name')}
                    error={errors.name?.message}
                  />

                  <Input
                    label="Telefon"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    {...register('phone')}
                    error={errors.phone?.message}
                  />
                </div>

                <Input
                  label="Email"
                  type="email"
                  placeholder="email@example.com"
                  {...register('email')}
                  error={errors.email?.message}
                />

                <Textarea
                  label="Xabar"
                  placeholder="Xabaringizni yozing..."
                  rows={5}
                  {...register('message')}
                  error={errors.message?.message}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2 py-4 text-lg mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Yuborilmoqda...' : (
                    <>
                      Yuborish <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
