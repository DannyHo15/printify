import { NavbarEditor } from '@/components/editor/NavbarEditor';
import { SideBarEditor } from '@/components/editor/SideBarEditor';
import { Toolbar } from '@/components/editor/Toolbar';
import React from 'react';
type layoutProps = {
  children: React.ReactNode;
};
const layout = ({ children }: layoutProps) => {
  return (
    <div className="flex h-screen flex-col">
      <NavbarEditor />
      <div className="absolute top-16 flex h-[calc(100%-68px)] w-full">
        <SideBarEditor />
        <main className="relative flex h-full flex-1 flex-col items-center overflow-auto bg-muted">
          <Toolbar />
          <div className="flex-center h-full w-full">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default layout;
