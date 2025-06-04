
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Briefcase, Download, MessageSquare } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const HomePage = () => {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-24 md:pt-32 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-20 -right-32 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 120 }}
            >
              Salut, je suis <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Yann Le Guennec</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Développeur Web Full-Stack passionné par la création d'expériences numériques intuitives et performantes.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Link to="/projects">
                  <Briefcase className="mr-2 h-5 w-5" /> Mes Projets
                </Link>
              </Button>
              <Button 
  variant="outline" 
  size="lg" 
  className="text-slate-300 border-slate-500 hover:bg-slate-700 hover:text-white shadow-lg transform hover:scale-105 transition-transform duration-300"
  onClick={() => window.open('/cvYann.pdf', '_blank')}
>
  <Download className="mr-2 h-5 w-5" /> Télécharger CV
</Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 md:mt-24 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.8,
                },
              },
              hidden: { opacity: 0 },
            }}
          >
            {[
              { title: "Développement Frontend", description: "React, Next.js, TailwindCSS. Création d'interfaces utilisateur interactives et responsives.", icon: "💻" },
              { title: "Développement Backend", description: "Node.js, Python. Conception d'API robustes et évolutives.", icon: "⚙️" },
              { title: "Compétences Clés", description: "Résolution de problèmes, travail d'équipe, communication, apprentissage continu.", icon: "🚀" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
                }}
              >
                <Card className="h-full glassmorphism hover:shadow-pink-500/30 transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-pink-400">
                      <span className="text-2xl mr-2">{item.icon}</span> {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    };

    export default HomePage;
  