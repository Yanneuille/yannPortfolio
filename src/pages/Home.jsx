
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      <AboutSection />
      
      <SkillsSection />
      
      <ProjectsSection limit={2} />
      
      <TestimonialsSection />
      
      {/* Call to Action Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Vous avez un projet en tête ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Je suis disponible pour discuter de votre projet et voir comment je peux vous aider à le concrétiser.
              N'hésitez pas à me contacter pour échanger sur vos idées.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="group"
            >
              Discutons de votre projet
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
