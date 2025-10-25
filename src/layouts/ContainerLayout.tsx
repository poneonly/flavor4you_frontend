'use client';

import '../app/globals.css';
import Header from '@components/header/Header';
import Footer from '@components/header/Footer';
import { ReactNode } from 'react';

export default function ContainerLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
