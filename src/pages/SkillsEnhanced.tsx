import React from 'react';
import Navigation from '@/components/Navigation';
import SkillsEnhanced from '@/components/SkillsEnhanced';
import Footer from '@/components/Footer';

const SkillsEnhancedPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <SkillsEnhanced />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SkillsEnhancedPage;