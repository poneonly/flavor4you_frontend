'use client';

import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import CategoryBar from './CategoryBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'white' : 'transparent',
        transition: 'background-color 0.3s ease',
        boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <NavBar isScrolled={isScrolled} />
      <CategoryBar isScrolled={isScrolled} />
    </header>
  );
}
