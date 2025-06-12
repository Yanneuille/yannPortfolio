
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Award, Brain, Users } from 'lucide-react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

    const AboutPage = () => {
      const skills = [
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "React & Next.js", level: 60 },
        { name: "Node.js ", level: 75 },
        { name: "TailwindCSS", level: 95 },
        { name: "Python", level: 75 },
        { name: "SQL & NoSQL", level: 80 },
      ];

      const timelineEvents = [
        { year: "2020", title: "Début de parcours", description: "Premiers pas dans le développement web, apprentissage HTML, CSS, JavaScript." },
        { year: "2021", title: "Formation", description: "MOOC de développement full-stack, spécialisation React et Node.js." },
        { year: "2022-2023", title: "Premiers Projets", description: "Réalisation de sites web et applications pour divers projets." },
        { year: "2024-Présent", title: "Développeur Web", description: "Contribution à des projets d'envergure, montée en compétences continues." },
      ];

      return (
        <div className="min-h-screen container mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              À Propos de <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Moi</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img  
                  className="relative rounded-lg shadow-2xl w-full h-auto max-h-[650px] object-cover" 
                  alt="Photo de profil"
                 src="public/PhotoYann.jpg" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Je suis un développeur web passionné avec une soif insatiable d'apprendre et de créer. Mon objectif est de transformer des idées complexes en solutions numériques élégantes et efficaces. J'aime relever des défis techniques et collaborer avec des équipes pour construire des produits qui ont un impact.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  En dehors du code, j'apprécie les échecs, la photographie et explorer les dernières tendances technologiques.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }} 
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-10 text-pink-400">Mes Compétences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                <Card className="glassmorphism p-1 hover:shadow-purple-500/30 transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="text-sm text-pink-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-10 text-purple-400">Mon Parcours</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-slate-700 rounded-full"></div>
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index} 
                  className={`mb-8 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right pr-8' : 'order-1 text-left pl-8 md:order-none'}`}>
                    <Card className="glassmorphism hover:shadow-pink-500/30 transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg text-pink-400">{event.year} - {event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-300">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-xl">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      );
    };

    export default AboutPage;
  