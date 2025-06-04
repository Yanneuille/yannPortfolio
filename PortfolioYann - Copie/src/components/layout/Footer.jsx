
    import React from 'react';
    import { Github, Linkedin, Twitter } from 'lucide-react';
    import { motion } from 'framer-motion';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      const socialLinks = [
        { icon: Github, href: "https://github.com/Yanneuille", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/yann-le-guennec-951627280/", label: "LinkedIn" },
        { icon: Twitter, href: "https://x.com/PouiYtb", label: "Twitter" },
      ];

      return (
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-slate-900/50 border-t border-slate-700/50 text-slate-400 py-8 mt-16"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-400 transition-colors duration-300"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
            <p className="text-sm">
              &copy; {currentYear} Mon Portfolio. Tous droits réservés.
            </p>
            <p className="text-xs mt-2">
              Construit avec <span className="text-sky-400">React</span>, <span className="text-teal-400">TailwindCSS</span>, et <span className="text-purple-400">Framer Motion</span>.
            </p>
          </div>
        </motion.footer>
      );
    };

    export default Footer;
  