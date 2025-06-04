
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Github, ExternalLink } from 'lucide-react';

    const projectsData = [
      {
        id: 1,
        title: "Jeux du snake en langage C",
        description: "Une jeux du snake directement dans le terminal tout sa en langage C",
        tags: ["Language C","Cahier des charges"],
        imageUrl: "public/worm.jpg",
        liveLink: "#",
        githubLink: "https://github.com/Yanneuille/Projets",
      },
      {
        id: 2,
        title: "Application de contrôle d'un robot",
        description: "Un outil collaboratif pour le contrôle de projets et de tâches, avec authentification et mises à jour en temps réel.",
        tags: ["App Inventor", "Productivité","arduino","C++"],
        imageUrl: "public/appinvertor.png",
        liveLink: "arduino_bluetooth_moteur_copy.aia",
        githubLink: "https://github.com/Yanneuille/Projets",
      },
      {
        id: 3,
        title: "Site web sur les JO 2024",
        description: "Création d'un site web sur les JO 2024 en équipe lors d'un projets de BUT informatique",
        tags: ["HTML", "TailwindCSS", "CSS", "Design"],
        imageUrl: "public/jo24.png",
        liveLink: "#",
        githubLink: "https://github.com/Maaxxiimee/SAE-1.06-SiteJO",
      },
       {
        id: 4,
        title: "Vidéo sur un team bulding",
        description: "création d'une vidéo avec music et voix off pour mettre en avant un team bulding",
        tags: ["Montage", "Davinci Resolve", "Audiovisuel"],
        imageUrl: "public/davinci.jpg",
        liveLink: "https://youtu.be/bIvaxngYoEw",
        githubLink: "#",
      },
        {
        id: 5,
        title: "Jeux d'échecs",
        description: "création d'un jeux d'échecs pliable à la main en bois ",
        tags: ["Minutieux", "Poçage", "Maitrise du bois"],
        imageUrl: "public/echec.jpg",
        liveLink: "#",
        githubLink: "#",
      },
        {
        id: 6,
        title: "Application de gestion d'événements ",
        description: "création d'une application de gestion d'événement pour des gala et soirée dansante",
        tags: ["fxml", "Java", "xml","Scene Builder"],
        imageUrl: "public/scene.png",
        liveLink: "#",
        githubLink: "https://github.com/Yanneuille/Projets",
      },
    ];

    const ProjectsPage = () => {
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
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { type: "spring", stiffness: 100, damping: 12 } 
        },
      };

      return (
        <div className="min-h-screen container mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Mes <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400">Projets</span>
            </h1>
            <p className="text-center text-lg text-slate-300 mb-16 max-w-2xl mx-auto">
              Découvrez une sélection de projets sur lesquels j'ai travaillé, illustrant mes compétences en développement web et ma passion pour la création de solutions innovantes.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectsData.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="h-full flex flex-col glassmorphism hover:shadow-cyan-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="aspect-video bg-slate-700 rounded-t-md mb-4 overflow-hidden">
                       <img  
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt={project.title}
                       src={project.imageUrl} />
                    </div>
                    <CardTitle className="text-2xl text-cyan-400">{project.title}</CardTitle>
                    <CardDescription className="text-slate-300 min-h-[60px]">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs bg-slate-700 text-sky-300 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end space-x-3">
                    {project.githubLink && project.githubLink !== "#" && (
                       <Button variant="outline" size="sm" asChild className="text-slate-300 border-slate-500 hover:bg-slate-700 hover:text-white">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <Button size="sm" asChild className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Démo Live
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    };

    export default ProjectsPage;
  