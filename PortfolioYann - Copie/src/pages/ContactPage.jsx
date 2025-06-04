
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { useToast } from "@/components/ui/use-toast"
    import { Send, Mail, Phone, MapPin } from 'lucide-react';

    const ContactPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi de formulaire
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form data submitted:", formData);
        toast({
          title: "Message Envoyé! 🎉",
          description: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
          variant: "default",
        });
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      };

      const contactInfo = [
        { icon: Mail, text: "yannlg1409@gmail.com", href: "mailto:votre.email@example.com" },
        { icon: Phone, text: "+33 7 72 26 57 59", href: "tel:+33772265759" },
        { icon: MapPin, text: "Lannion, France", href: "#" },
      ];

      return (
        <div className="min-h-screen container mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Contactez-<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">Moi</span>
            </h1>
            <p className="text-center text-lg text-slate-300 mb-16 max-w-2xl mx-auto">
              Une question, une proposition de projet, ou simplement envie de discuter ? N'hésitez pas à me laisser un message !
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Card className="glassmorphism p-2 md:p-4 h-full hover:shadow-teal-500/30 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-teal-400">Laissez-moi un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-300">Nom</Label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className="mt-1 bg-slate-700/50 border-slate-600 text-slate-200 focus:ring-teal-500"
                        placeholder="Votre nom complet" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-300">Email</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="mt-1 bg-slate-700/50 border-slate-600 text-slate-200 focus:ring-teal-500"
                        placeholder="votre.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-300">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        rows={5} 
                        className="mt-1 bg-slate-700/50 border-slate-600 text-slate-200 focus:ring-teal-500" 
                        placeholder="Votre message ici..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold shadow-lg"
                    >
                      {isSubmitting ? (
                        <motion.div 
                          className="flex items-center justify-center"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                           <Send className="mr-2 h-4 w-4 animate-pulse" /> Envoi en cours...
                        </motion.div>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Envoyer le Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay:0.2 }}
              className="space-y-6"
            >
              <Card className="glassmorphism p-2 md:p-4 hover:shadow-blue-500/30 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">Informations de Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a 
                      key={index}
                      href={info.href}
                      target={info.href === "#" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <info.icon className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span>{info.text}</span>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
               <Card className="glassmorphism p-2 md:p-4 hover:shadow-purple-500/30 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Retrouvez-moi aussi sur</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                     <Button variant="outline" asChild className="text-slate-300 border-slate-500 hover:bg-slate-700 hover:text-purple-400">
                        <a href="https://github.com/Yanneuille" target="_blank" rel="noopener noreferrer">GitHub</a>
                     </Button>
                     <Button variant="outline" asChild className="text-slate-300 border-slate-500 hover:bg-slate-700 hover:text-purple-400">
                        <a href="https://www.linkedin.com/in/yann-le-guennec-951627280/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                     </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      );
    };

    export default ContactPage;
  