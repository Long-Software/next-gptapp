import { endpoints } from '@/const'
import Link from 'next/link'

const links = [
  { href: endpoints.chat, label: 'Chat' },
  { href: endpoints.tour, label: 'Tour' },
  { href: endpoints.newTour, label: 'New Tour' },
  { href: endpoints.profile, label: 'Profile' }
]
const NavLinks = () => {
  return (
    <ul className='menu text-base-content'>
      {links.map(link => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
