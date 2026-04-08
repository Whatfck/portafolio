const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mi' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegacion principal">
        <span className="navbar-brand">Daniel Perez</span>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
