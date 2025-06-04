
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
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
    <section className="section-container">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img  
                alt="Photo professionnelle du développeur"
                className="rounded-2xl w-4/5 h-4/5 object-cover border-4 border-white/10 shadow-2xl"
               src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c" />
            </div>
          </div>
        </motion.div>
        
        <div>
          <motion.h2 
            className="section-heading"
            variants={itemVariants}
          >
            À propos de moi
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-muted-foreground"
          >
            <p>
              Bonjour ! Je suis un développeur web passionné avec plus de 5 ans d'expérience dans la création d'applications web modernes et performantes.
            </p>
            
            <p>
              Spécialisé dans les technologies front-end comme React, je m'efforce de créer des interfaces utilisateur intuitives et esthétiques qui offrent une expérience utilisateur exceptionnelle.
            </p>
            
            <p>
              Mon parcours m'a permis de travailler sur divers projets, des sites vitrines aux applications web complexes, en passant par des plateformes e-commerce.
            </p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold mb-4">Expérience professionnelle</h3>
            
            <div className="space-y-6">
              <div className="glass-card p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">Développeur Front-end Senior</h4>
                  <span className="text-sm text-muted-foreground">2020 - Présent</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Entreprise XYZ</p>
              </div>
              
              <div className="glass-card p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">Développeur Web</h4>
                  <span className="text-sm text-muted-foreground">2018 - 2020</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Agence ABC</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <Button className="group">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Télécharger mon CV
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
