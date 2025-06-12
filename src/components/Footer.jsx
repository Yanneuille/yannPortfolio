
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-secondary/30 backdrop-blur-sm border-t border-secondary/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold gradient-text">Portfolio</span>
            <p className="mt-4 text-sm text-muted-foreground">
              Un portfolio moderne présentant mes compétences et projets en développement web.
            </p>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-4">Liens rapides</p>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">À propos</a></li>
              <li><a href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projets</a></li>
              <li><a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-4">Réseaux sociaux</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-secondary/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Mon Portfolio. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            Conçu et développé avec passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
