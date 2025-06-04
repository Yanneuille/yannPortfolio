
    import React, { Suspense, lazy } from 'react';
    import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
    import { AnimatePresence, motion } from 'framer-motion';
    import Navbar from '@/components/layout/Navbar';
    import Footer from '@/components/layout/Footer';
    import { Toaster } from "@/components/ui/toaster";

    const HomePage = lazy(() => import('@/pages/HomePage'));
    const AboutPage = lazy(() => import('@/pages/AboutPage'));
    const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
    const ContactPage = lazy(() => import('@/pages/ContactPage'));
    const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

    const PageLoader = () => (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            border: '5px solid #f3f3f3',
            borderTop: '5px solid #FF69B4', 
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
    
    const AnimatedRoutes = () => {
      const location = useLocation();
      return (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      );
    };

    function App() {
      return (
        <Router>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-50">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <AnimatedRoutes />
              </Suspense>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      );
    }

    export default App;
  