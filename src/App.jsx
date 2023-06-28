import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Nulis, Shop } from './pages';
import { NavbarComponents } from './components';

export default function App() {
  return (
    <BrowserRouter>
      <section id="container">
        <NavbarComponents />
        <main>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="nulis" Component={Nulis} />
            <Route path="shop" Component={Shop} />
          </Routes>
        </main>
      </section>
    </BrowserRouter>
  );
}
