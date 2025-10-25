import React from 'react';
import '../app/globals.css';
import Image from 'next/image';
import leftImage from '../app/left.avif';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex flex-1 items-center justify-center bg-white p-0">
        <Image src={leftImage} alt="Flavor4You Logo" priority />
      </div>
      <div className="flex flex-1 items-center justify-center p-4 sm:p-6 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
