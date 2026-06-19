import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, LogOut, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleMobileMenu, setMobileMenuOpen } from '../store/uiSlice'
import { logoutUser } from '../store/authSlice'
import { Button } from './ui/Button'
import Logo from '../assets/logo.png'

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const isMobileMenuOpen = useAppSelector((state) => state.ui.isMobileMenuOpen)
  const { user, isAuthenticated } = useAppSelector((state) => state.auth)

  const navItems = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Biz haqimizda', path: '#about' },
    { name: 'Yangiliklar', path: '#news' },
    { name: 'O\'qituvchilar', path: '#teachers' },
    { name: 'Galereya', path: '#gallery' },
    { name: 'Aloqa', path: '/contact' },
  ]

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  const handleNavClick = () => {
    if (isMobileMenuOpen) {
      dispatch(setMobileMenuOpen(false))
    }
    // We let Lenis in App.tsx handle the actual scrolling to the hash
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={Logo} alt="20-maktab logo" className="h-10 w-auto object-contain" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 hidden sm:block">
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.path.startsWith('#') ? (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={handleNavClick}
                  className="text-text-secondary hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-text-secondary hover:text-brand-yellow transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-text-primary">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{user?.name}</span>
                </div>
                <Button variant="secondary" onClick={handleLogout} className="flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Chiqish
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="secondary">Kirish</Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary">Ro\'yxatdan o\'tish</Button>
                </Link>
              </div>
            )}
          </div>

          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
          >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-4">
                {navItems.map((item) => (
                  item.path.startsWith('#') ? (
                    <a
                      key={item.path}
                      href={item.path}
                      className="block text-text-secondary hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block text-text-secondary hover:text-brand-yellow transition-colors duration-200"
                      onClick={() => dispatch(setMobileMenuOpen(false))}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                {isAuthenticated ? (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2 text-text-primary mb-4">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{user?.name}</span>
                    </div>
                    <Button variant="secondary" onClick={handleLogout} className="w-full flex items-center gap-2">
                      <LogOut className="w-4 h-4" />
                      Chiqish
                    </Button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Link to="/login" onClick={() => dispatch(setMobileMenuOpen(false))}>
                      <Button variant="secondary" className="w-full">Kirish</Button>
                    </Link>
                    <Link to="/register" onClick={() => dispatch(setMobileMenuOpen(false))}>
                      <Button variant="primary" className="w-full">Ro\'yxatdan o\'tish</Button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
