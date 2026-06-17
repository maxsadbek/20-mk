import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleMobileMenu, setMobileMenuOpen } from '../store/uiSlice'
import { Button } from './ui/Button'
import Logo from '../assets/logo.png'

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const isMobileMenuOpen = useAppSelector((state) => state.ui.isMobileMenuOpen)

  const navItems = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Biz haqimizda', path: '#about' },
    { name: 'Yangiliklar', path: '#news' },
    { name: 'O\'qituvchilar', path: '#teachers' },
    { name: 'Galereya', path: '#gallery' },
    { name: 'Aloqa', path: '#contact' },
  ]

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
            <Button variant="primary">Ariza topshirish</Button>
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
                <Button variant="primary" className="w-full">
                  Ariza topshirish
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
