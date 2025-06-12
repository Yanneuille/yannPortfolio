
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { AlertTriangle } from 'lucide-react';

    const NotFoundPage = () => {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="p-8 md:p-12 rounded-xl shadow-2xl glassmorphism max-w-md w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <AlertTriangle className="h-24 w-24 text-yellow-400 mx-auto mb-6" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 mb-4">
              404
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-slate-200 mb-3">
              Oops! Page non trouvée.
            </p>
            <p className="text-slate-400 mb-8">
              La page que vous cherchez semble s'être égarée dans le cyberespace.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold shadow-lg">
                <Link to="/">
                  Retourner à l'accueil
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      );
    };

    export default NotFoundPage;
  