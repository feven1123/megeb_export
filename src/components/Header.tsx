'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
}

const publicLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/About' },
  { label: 'Products', href: '/Products' },
  { label: 'Contact Us', href: '/Contact' },
];

const adminLinks: NavLink[] = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Products', href: '/admin/products' },
  { label: 'Profile', href: '/admin/profile' },
  { label: 'Logout', href: '/admin/logout' },
];

export default function Header() {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsAdmin(pathname.startsWith('/admin'));
  }, [pathname]);

  const links = isAdmin ? adminLinks : publicLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Site name */}
          <Link
            href={isAdmin ? '/admin/dashboard' : '/'}
            className="flex items-center space-x-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/1.png" // replace with your logo path
              alt="Megeb Export Logo"
              width={270}
              height={60}
              className="transition-transform duration-300 transform group-hover:scale-105"
            />
            <span className="text-green-800 text-2xl font-bold select-none">
              
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-gray-700 hover:text-green-700 transition-colors font-medium relative group ${
                  pathname === href ? 'text-green-700 font-semibold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-4 py-3 space-y-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 px-3 rounded hover:bg-green-600 hover:text-white font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
