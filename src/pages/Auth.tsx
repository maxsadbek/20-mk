import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { loginUser, registerUser, clearError } from '../store/authSlice'
import { LoginFormData, RegisterFormData } from '../types/index'
import { Mail, Lock, Phone, User } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Noto\'g\'ri email formati'),
  password: z.string().min(6, 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak'),
})

const registerSchema = z.object({
  name: z.string().min(2, 'Ism kamida 2 ta belgidan iborat bo\'lishi kerak'),
  email: z.string().email('Noto\'g\'ri email formati'),
  phone: z.string().min(9, 'Telefon raqami kamida 9 ta belgidan iborat bo\'lishi kerak'),
  password: z.string().min(6, 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak'),
  confirmPassword: z.string().min(6, 'Parolni tasdiqlang'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Parollar mos kelmaydi',
  path: ['confirmPassword'],
})

export const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth)

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: registerErrors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
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

  const onLoginSubmit = async (data: LoginFormData) => {
    const result = await dispatch(loginUser(data))
    if (loginUser.fulfilled.match(result)) {
      navigate('/')
    }
  }

  const onRegisterSubmit = async (data: RegisterFormData) => {
    const result = await dispatch(registerUser(data))
    if (registerUser.fulfilled.match(result)) {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[420px]"
      >
        {/* Tab Switcher */}
        <div className="flex mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 pb-4 text-base font-medium transition-all duration-300 ${
              activeTab === 'login'
                ? 'text-brand-yellow border-b-2 border-brand-yellow'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 pb-4 text-base font-medium transition-all duration-300 ${
              activeTab === 'register'
                ? 'text-brand-yellow border-b-2 border-brand-yellow'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Register
          </button>
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {activeTab === 'login' ? (
            <motion.form
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmitLogin(onLoginSubmit)}
              className="space-y-5"
            >
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full h-[42px] pl-10 pr-4 bg-white text-sm text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-colors rounded-input"
                  {...registerLogin('email')}
                />
              </div>
              {loginErrors.email && (
                <p className="mt-1 text-sm text-red-500">{loginErrors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Password</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-[42px] pl-10 pr-4 bg-white text-sm text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-colors rounded-input"
                  {...registerLogin('password')}
                />
              </div>
              {loginErrors.password && (
                <p className="mt-1 text-sm text-red-500">{loginErrors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-[42px] bg-brand-yellow text-gray-900 text-sm font-medium hover:bg-brand-yellow-light hover:shadow-glow transition-all duration-300 rounded-pill"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
            </motion.form>
          ) : (
            <motion.form
              key="register"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmitRegister(onRegisterSubmit)}
              className="space-y-5"
            >
            <div>
              <label className="block text-sm text-gray-600 mb-2">Name</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full h-[42px] pl-10 pr-4 bg-white text-sm text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-colors rounded-input"
                  {...registerRegister('name')}
                />
              </div>
              {registerErrors.name && (
                <p className="mt-1 text-sm text-red-500">{registerErrors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full h-[42px] pl-10 pr-4 bg-white text-sm text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-colors rounded-input"
                  {...registerRegister('email')}
                />
              </div>
              {registerErrors.email && (
                <p className="mt-1 text-sm text-red-500">{registerErrors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  className="w-full h-[42px] pl-10 pr-4 bg-white text-sm text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-colors rounded-input"
                  {...registerRegister('phone')}
                />
              </div>
              {registerErrors.phone && (
                <p className="mt-1 text-sm text-red-500">{registerErrors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Password</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  placeholder="Min 6 characters"
                  className="w-full h-[42px] pl-10 pr-4 bg-white text-sm text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-colors rounded-input"
                  {...registerRegister('password')}
                />
              </div>
              {registerErrors.password && (
                <p className="mt-1 text-sm text-red-500">{registerErrors.password.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  placeholder="Re-enter password"
                  className="w-full h-[42px] pl-10 pr-4 bg-white text-sm text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-colors rounded-input"
                  {...registerRegister('confirmPassword')}
                />
              </div>
              {registerErrors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{registerErrors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-[42px] bg-brand-yellow text-gray-900 text-sm font-medium hover:bg-brand-yellow-light hover:shadow-glow transition-all duration-300 rounded-pill"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Register'}
            </button>
            </motion.form>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-brand-yellow transition-colors"
          >
            Back to home
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
