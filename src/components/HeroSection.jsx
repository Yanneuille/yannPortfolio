
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center hero-gradient pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              Bonjour, je suis <span className="gradient-text">Yann Le Guennec</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-muted-foreground"
              variants={itemVariants}
            >
              Développeur web passionné par la création d'expériences numériques exceptionnelles.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                onClick={() => navigate('/projects')}
                className="group"
              >
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Me contacter
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center gap-4"
              variants={itemVariants}
            >
              <p className="text-sm text-muted-foreground">Technologies favorites:</p>
              <div className="flex gap-3">
                {['React', 'TailwindCSS', 'JavaScript', 'Node.js'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 border border-secondary/80"
                    whileHover={{ y: -3, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.8 + (index * 0.1) } 
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img  
                  alt="Portrait professionnel du développeur"
                  className="rounded-full w-4/5 h-4/5 object-cover border-4 border-white/10 shadow-2xl"
                 src="https://images.unsplash.com/photo-1675495667069-d18d7d78eeb2" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
