import React from 'react';
import Navigation from '@/components/Navigation';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Achievements />
      </div>
      <Footer />
    </div>
  );
};

export default AchievementsPage;