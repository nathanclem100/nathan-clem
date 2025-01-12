'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Documentation', href: '/documentation' },
    { label: 'Membership', href: '/member' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#2A2A2A] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              GWN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-white px-4 py-2 rounded-md border border-white hover:bg-white hover:text-[#2A2A2A] transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="bg-[#D88C7D] text-white px-4 py-2 rounded-md hover:bg-[#C07A6D] transition-colors"
            >
              Sign Up
            </Link>
            <Link
              href="/schedule"
              className="bg-[#D88C7D] text-white px-4 py-2 rounded-md hover:bg-[#C07A6D] transition-colors"
            >
              Schedule Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md border border-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 bg-[#D88C7D] text-white rounded-md hover:bg-[#C07A6D]"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                href="/schedule"
                className="block px-3 py-2 bg-[#D88C7D] text-white rounded-md hover:bg-[#C07A6D]"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
