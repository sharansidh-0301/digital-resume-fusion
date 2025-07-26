import React from 'react';
import Navigation from '@/components/Navigation';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Certifications />
      </div>
      <Footer />
    </div>
  );
};

export default CertificationsPage;