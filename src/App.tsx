import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

const Home = lazy(() => import('./pages/Home'));
const Index = lazy(() => import('./pages/Index'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AchievementsPage = lazy(() => import('./pages/AchievementsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SkillsPage = lazy(() => import('./pages/SkillsEnhanced'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const LoadingScreen = () => <div className="flex min-h-screen items-center justify-center bg-background font-mono text-xs uppercase text-primary">Initializing secure interface...</div>;

const App = () => (
  <BrowserRouter>
    <ScrollProgress />
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills-enhanced" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <BackToTop />
  </BrowserRouter>
);
export default App;
