
import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-gray-300 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm currently looking for new opportunities. Whether you have a question, 
          a project idea, or just want to say hi, I'd love to hear from you!
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-white">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                variants={itemVariants} 
                className="space-y-2"
              >
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-portfolio-purple"
                />
              </motion.div>
              <motion.div 
                variants={itemVariants} 
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-portfolio-purple"
                />
              </motion.div>
              <motion.div 
                variants={itemVariants} 
                className="space-y-2"
              >
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                <Textarea
                  id="message"
                  placeholder="I'd like to discuss a project opportunity..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white min-h-[150px] focus:border-portfolio-purple"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button type="submit" className="btn-primary w-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-10 lg:mt-0"
          >
            <h3 className="text-xl font-bold mb-6 text-white">Connect with me</h3>
            
            <div className="flex flex-col space-y-6">
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:bg-portfolio-purple/20 transition-colors">
                  <Mail className="h-5 w-5 text-portfolio-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href="mailto:hello@example.com" 
                    className="text-white hover:text-portfolio-purple transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:bg-portfolio-purple/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-portfolio-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-portfolio-purple transition-colors"
                  >
                    linkedin.com/in/johndoe
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:bg-portfolio-purple/20 transition-colors">
                  <Github className="h-5 w-5 text-portfolio-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-portfolio-purple transition-colors"
                  >
                    github.com/johndoe
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-10 p-6 bg-gray-800 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-2">Looking for new opportunities</h4>
              <p className="text-gray-300">
                I'm currently available for freelance projects, full-time positions, 
                or consulting work. Let's discuss how I can contribute to your team!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
