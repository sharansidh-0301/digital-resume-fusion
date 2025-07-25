import React from 'react';
import Navigation from '@/components/Navigation';
import HeroEnhanced from '@/components/HeroEnhanced';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroEnhanced />
      <Footer />
    </div>
  );
};

export default Home;