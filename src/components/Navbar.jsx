import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-custom flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-primary">Zentrolix</h1>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="rounded-xl bg-primary px-5 py-2 text-white">
            Get Started
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#technologies">Technologies</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
