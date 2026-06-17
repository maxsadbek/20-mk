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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Aloqa</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedText delay={0.2}>
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Biz bilan bog'laning
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brand-yellow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Manzil</h4>
                    <p className="text-text-secondary">
                      Toshkent shahri, 20-maktab
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brand-yellow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Telefon</h4>
                    <p className="text-text-secondary">+998 71 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brand-yellow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                    <p className="text-text-secondary">info@20maktab.uz</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <Card>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Ism"
                  placeholder="Ismingizni kiriting"
                  {...register('name')}
                  error={errors.name?.message}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="email@example.com"
                  {...register('email')}
                  error={errors.email?.message}
                />

                <Input
                  label="Telefon"
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  {...register('phone')}
                  error={errors.phone?.message}
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
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Yuborilmoqda...' : 'Yuborish'}
                </Button>
              </form>
            </Card>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
