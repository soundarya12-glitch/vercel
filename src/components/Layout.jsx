// src/components/Layout.jsx


import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
     
      <main className="pt-20 pb-20 max-w-4xl mx-auto p-4">
        <Outlet />
      </main>
    
    

    </div>
  );
}
