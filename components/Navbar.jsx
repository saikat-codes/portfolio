export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center">
      <a href="#" className="text-lg font-semibold text-primary">
        SD<span className="text-accent">.</span>
      </a>

      <div className="flex gap-8 text-sm text-secondary font-mono font-[600]">
        <a href="#work" className="hover:text-primary transition-colors">work</a>
        <a href="#about" className="hover:text-primary transition-colors">about</a>
        <a href="#contact" className="hover:text-primary transition-colors">contact</a>
      </div>
    </nav>
  )
}
