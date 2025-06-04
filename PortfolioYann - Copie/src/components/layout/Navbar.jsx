
    import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Home, User, Briefcase, Mail, Moon, Sun } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';

    const navItems = [
      { name: 'Accueil', path: '/', icon: Home },
      { name: 'À propos', path: '/about', icon: User },
      { name: 'Projets', path: '/projects', icon: Briefcase },
      { name: 'Contact', path: '/contact', icon: Mail },
    ];

    const Navbar = () => {
      const location = useLocation();
      const [isDarkMode, setIsDarkMode] = React.useState(true);

      React.useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [isDarkMode]);

      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };

      return (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 glassmorphism shadow-lg p-4"
        >
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Yann
            </Link>
            <div className="flex items-center space-x-2 md:space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out
                    ${location.pathname === item.path 
                      ? 'text-pink-400' 
                      : 'text-slate-300 hover:text-pink-400'
                    }`}
                >
                  <Link to={item.path}>
                    <item.icon className="w-4 h-4 mr-0 md:mr-2" />
                    <span className="hidden md:inline">{item.name}</span>
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"
                        layoutId="underline"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </Button>
              ))}
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-slate-300 hover:text-pink-400">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </motion.nav>
      );
    };

    export default Navbar;
  