import React from 'react';
import Header from '../layout/header';
import { UserNav } from '../layout/user-nav';
import ThemeToggle from '../layout/ThemeToggle/theme-toggle';
import { Logo } from '../layout/logo';

export const NavbarEditor = () => {
  return (
    <nav className="flex h-16 items-center gap-2 border border-solid border-b-gray-200 p-4 pl-8">
      <div className="flex-1">
        <Logo />
      </div>
      <UserNav />
      <ThemeToggle />
    </nav>
  );
};
