'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import flavorLogo from '../../../app/flavorLOGO.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
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

      <h1 className="mt-3 text-center text-3xl font-bold sm:text-4xl">Login</h1>

      <div className="mt-5 flex flex-col gap-3">
        <Button variant="outlined" startIcon={<GoogleIcon />} fullWidth>
          Continute with Google
        </Button>
        <Button variant="outlined" startIcon={<FacebookIcon />} fullWidth>
          Continute with Facebook
        </Button>
        <Button variant="outlined" startIcon={<GitHubIcon />} fullWidth>
          Continute with Github
        </Button>
      </div>
      <p className="mt-5 text-center">Sign in using your Flavor4You account.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <TextField id="email" label="Email" variant="outlined" fullWidth />
        </div>
        <div>
          <TextField id="password" label="Password" type="password" variant="outlined" fullWidth />
        </div>
        <div>
          <Button variant="contained" fullWidth>
            Sign in
          </Button>
        </div>
      </form>
      <div className="pt-5 text-center">
        <p>
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
