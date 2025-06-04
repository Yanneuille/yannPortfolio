
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Dupont',
      role: 'Directrice Marketing, Entreprise XYZ',
      content: 'Un travail exceptionnel ! Le site web que vous avez créé pour notre entreprise a dépassé toutes nos attentes. Votre professionnalisme et votre créativité ont fait toute la différence.',
      avatar: 'testimonial-1',
    },
    {
      id: 2,
      name: 'Thomas Martin',
      role: 'Fondateur, Startup ABC',
      content: 'Collaborer avec vous a été une expérience formidable. Vous avez su comprendre nos besoins et transformer notre vision en réalité. Je recommande vivement vos services !',
      avatar: 'testimonial-2',
    },
    {
      id: 3,
      name: 'Sophie Lefebvre',
      role: 'Responsable Produit, Entreprise DEF',
      content: 'Votre expertise technique et votre sens du design ont permis de créer une application qui a considérablement amélioré l\'expérience de nos utilisateurs. Merci pour votre excellent travail !',
      avatar: 'testimonial-3',
    },
  ];

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
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Ce que disent mes clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de personnes avec qui j'ai eu le plaisir de collaborer.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="glass-card p-6 relative"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />
              
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img  
                    alt={`Photo de ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                   src="https://images.unsplash.com/photo-1665113361900-b9720957d41a" />
                </div>
                
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
