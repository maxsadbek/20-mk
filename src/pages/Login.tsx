import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { AnimatedText } from '../components/ui/AnimatedText'
import { LoginFormData } from '../types/index'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { loginUser, clearError } from '../store/authSlice'
import { LogIn, Mail, Lock, ArrowRight } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Noto\'g\'ri email formati'),
  password: z.string().min(6, 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak'),
})

export const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    return () => {
      dispatch(clearError())
    }
  }, [dispatch])

  const onSubmit = async (data: LoginFormData) => {
    const result = await dispatch(loginUser(data))
    if (loginUser.fulfilled.match(result)) {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <AnimatedText>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-2xl mb-4">
              <LogIn className="w-8 h-8 text-gray-900" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tizimga kirish</h1>
            <p className="text-gray-600">Hisobingizga kiring</p>
          </div>
        </AnimatedText>

        <Card className="p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 rounded-3xl">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                label="Email"
                type="email"
                placeholder="email@example.com"
                icon={<Mail className="w-5 h-5" />}
                {...register('email')}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Input
                label="Parol"
                type="password"
                placeholder="••••••••"
                icon={<Lock className="w-5 h-5" />}
                {...register('password')}
                error={errors.password?.message}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full flex items-center justify-center gap-2 py-4 text-lg"
              disabled={loading}
            >
              {loading ? 'Kirilmoqda...' : (
                <>
                  Tizimga kirish <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Hisobingiz yo'qmi?{' '}
              <Link to="/register" className="text-brand-yellow font-semibold hover:underline">
                Ro'yxatdan o'ting
              </Link>
            </p>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-500 hover:text-brand-yellow transition-colors inline-flex items-center gap-2">
            Bosh sahifaga qaytish
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
