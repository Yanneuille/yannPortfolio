
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = ({ limit = null }) => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce moderne',
      description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'e-commerce-project',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Application de gestion de tâches',
      description: 'Application permettant de gérer ses tâches avec des fonctionnalités de priorité et de catégorisation.',
      tags: ['React', 'Firebase', 'TailwindCSS'],
      image: 'task-management-app',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Site vitrine pour restaurant',
      description: 'Site web élégant pour un restaurant avec menu interactif et système de réservation.',
      tags: ['HTML/CSS', 'JavaScript', 'PHP'],
      image: 'restaurant-website',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Dashboard analytique',
      description: 'Interface d\'administration avec visualisation de données et rapports en temps réel.',
      tags: ['React', 'Chart.js', 'Node.js', 'Express'],
      image: 'analytics-dashboard',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-heading">Mes projets</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez une sélection de mes réalisations récentes.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card card-hover"
            variants={itemVariants}
          >
            <img  
              alt={`Capture d'écran du projet ${project.title}`}
              className="w-full h-64 object-cover"
             src="https://images.unsplash.com/photo-1693287426205-90bc8c926463" />
            
            <div className="project-card-overlay" />
            
            <div className="project-card-content">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <span>Démo</span>
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-1 h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {limit && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button 
            size="lg" 
            onClick={() => navigate('/projects')}
            className="group"
          >
            Voir tous les projets
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
