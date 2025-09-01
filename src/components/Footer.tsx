'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Megeb Export</h2>
          <p className="mt-3 text-sm leading-6">
            Sharing Ethiopia’s authentic flavors with the world —
            Injera, Berbere, Mitmita, Shiro, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-black">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-black">Products</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>📞 +251 953 947 848</li>
            <li>✉️ info@megebexport.com</li>
            <li>📍 Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Stay Connected</h3>
          <p className="mt-3 text-sm">Subscribe for updates on Ethiopian exports.</p>
          <form className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md border border-gray-300 text-gray-800"
            />
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-700 px-4 py-2 rounded-r-md text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Megeb Export. All rights reserved.
      </div>
    </footer>
  );
}
