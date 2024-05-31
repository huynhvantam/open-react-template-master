import Link from 'next/link'
import MobileMenu from '../../[lng]/components/Header/mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <div className='h-24 w-24 bg-red-100'></div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className='flex gap-x-5  flex-1 justify-end'>
              <li><Link className=" font-medium text-rose-600 hover:bg-rose-100 px-4 py-3 flex items-center transition duration-150 ease-in-out" href="/">HOME</Link></li>
              <li><Link className=" font-medium text-rose-600 hover:bg-rose-100 px-4 py-3 flex items-center transition duration-150 ease-in-out" href="/about">ABOUT</Link></li>
              <li><Link className=" font-medium text-rose-600 hover:bg-rose-100 px-4 py-3 flex items-center transition duration-150 ease-in-out" href="/hero">HERO</Link></li>
              <li><Link className=" font-medium text-rose-600 hover:bg-rose-100 px-4 py-3 flex items-center transition duration-150 ease-in-out" href="/zero">ZERO</Link></li>
              <li><Link className=" font-medium text-rose-600 hover:bg-rose-100 px-4 py-3 flex items-center transition duration-150 ease-in-out" href="/first">FIRST</Link></li>
              <li><Link className="btn-sm text-white round bg-rose-600 hover:bg-rose-700 px-4 py-3 " href="/first">Liên hệê</Link></li>
            </ul>
            {/* <Link
              href="/mamnon"
              className="font-medium text-rose-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Mầm non
            </Link> */}
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
