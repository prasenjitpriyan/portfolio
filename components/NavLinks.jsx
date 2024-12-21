import Link from 'next/link'

const NavLinks = () => {
  const sections = [
    'introduction',
    'skills',
    'projects',
    'achievements',
    'contact'
  ]

  return (
    <nav className="flex flex-col items-start space-y-4">
      {sections.map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          className="hover:text-my-color-3 transition-all"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}
    </nav>
  )
}

export default NavLinks
