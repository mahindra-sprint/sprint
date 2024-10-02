import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { setupMenuToggle, setupSideLinks, setupSearchToggle, setupThemeToggle, setupCarousel,  setupModal} from '../src/utils/animation';

function App() {
  useEffect(() => {
    setupMenuToggle();
    setupSideLinks();
    setupSearchToggle();
    setupThemeToggle();
    setupCarousel();
    setupModal();
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;