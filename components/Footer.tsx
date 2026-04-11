import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Footer({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).footer

  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Daniel Perez. {dict.rights}</p>
    </footer>
  )
}

