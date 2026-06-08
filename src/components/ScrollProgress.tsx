import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary transition-[width] duration-150"
        style={{ width: `${progress}%`, boxShadow: '0 0 12px hsl(var(--primary) / 0.6)' }}
      />
    </div>
  );
};

export default ScrollProgress;
