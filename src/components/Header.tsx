import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleMobileMenu, setMobileMenuOpen } from '../store/uiSlice'
import { Button } from './ui/Button'

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-text-primary font-bold text-xl">
              20
            </div>
            <span className="text-xl font-semibold text-text-primary">maktab</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-text-secondary hover:text-brand-yellow transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="primary">Ariza topshirish</Button>
          </div>

          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-text-secondary hover:text-brand-yellow transition-colors duration-200"
                onClick={() => dispatch(setMobileMenuOpen(false))}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="primary" className="w-full">
              Ariza topshirish
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
