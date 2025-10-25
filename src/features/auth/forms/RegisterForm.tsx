'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import flavorLogo from '../../../app/flavorLOGO.png';
import Image from 'next/image';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Register attempt:', { name, email, password });
  };

  return (
    <div className="w-full px-4 sm:px-6 py-6">
      <div className="flex justify-end">
        <Button variant="outlined" href="/">
          Homepage
        </Button>
      </div>
      <div className="flex items-center justify-center mt-2">
        <Image src={flavorLogo} alt="LOGO" className="rounded-full" height={90} width={90}></Image>
      </div>

      <h1 className="mt-3 text-center text-3xl font-bold sm:text-4xl">Register</h1>

      <p className="mt-5 text-center">Create an account to sign in Flavor4You.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <TextField
            id="name"
            label="Username"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>
        <div>
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>
        <div>
          <Button variant="contained" fullWidth type="submit">
            Register
          </Button>
        </div>
      </form>
      <div className="pt-5 text-center">
        <p>
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
