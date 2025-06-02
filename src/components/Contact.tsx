
import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, Heart, Sparkles } from "lucide-react";
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
      title: "Message sent! 🎉",
      description: "Thanks for reaching out. I'll get back to you soon! ✨",
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
    <section id="contact" className="bg-gradient-to-br from-portfolio-blue-100 via-white to-portfolio-purple-100 py-20 relative overflow-hidden floating-shapes">
      {/* Floating background elements */}
      <div className="absolute top-16 right-16 w-32 h-32 bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 rounded-full blur-2xl opacity-60 animate-float"></div>
      <div className="absolute bottom-16 left-16 w-40 h-40 bg-gradient-to-r from-portfolio-purple-100 to-portfolio-blue-100 rounded-full blur-2xl opacity-60 animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="section-container relative z-10">
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch 📬
        </motion.h2>
        <motion.p
          className="text-portfolio-dark max-w-3xl mx-auto text-center mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm currently looking for new opportunities. Whether you have a question,
          a project idea, or just want to say hi, I'd love to hear from you! 💌
        </motion.p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="gen-z-card p-8 group"
            whileHover={{
              y: -10,
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mail className="h-6 w-6 text-portfolio-blue" />
              </motion.div>
              <h3 className="text-2xl font-bold text-portfolio-dark group-hover:text-portfolio-blue transition-colors duration-300">
                Send me a message 💬
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="name" className="text-sm font-medium text-portfolio-dark">Your Name ✨</label>
                <Input
                  id="name"
                  placeholder="Putri Tamara Gultom"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/80 backdrop-blur-sm border-white/50 text-portfolio-dark focus:border-portfolio-purple rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm font-medium text-portfolio-dark">Your Email 📧</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/80 backdrop-blur-sm border-white/50 text-portfolio-dark focus:border-portfolio-purple rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="message" className="text-sm font-medium text-portfolio-dark">Your Message 💭</label>
                <Textarea
                  id="message"
                  placeholder="I'd like to discuss a project opportunity... 🚀"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/80 backdrop-blur-sm border-white/50 text-portfolio-dark min-h-[150px] focus:border-portfolio-purple rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button type="submit" className="btn-primary w-full group">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                  >
                    Send Message
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 lg:mt-0"
          >
            <motion.div
              className="gen-z-card p-8 group mb-8"
              whileHover={{
                y: -10,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-6 w-6 text-portfolio-purple" />
                </motion.div>
                <h3 className="text-2xl font-bold text-portfolio-dark group-hover:text-portfolio-purple transition-colors duration-300">
                  Connect with me 🌟
                </h3>
              </div>

              <div className="flex flex-col space-y-6">
                <motion.div
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                    <Mail className="h-5 w-5 text-portfolio-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-gray font-medium">Email 📧</p>
                    <a
                      href="mailto:putriigultom11@gmail.com"
                      className="text-portfolio-dark hover:text-portfolio-purple transition-colors font-semibold"
                    >
                      putriigultom11@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                    <Linkedin className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-gray font-medium">LinkedIn 💼</p>
                    <a
                      href="https://www.linkedin.com/in/putrigultom07/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-dark hover:text-portfolio-blue transition-colors font-semibold"
                    >
                      linkedin.com/in/putrigultom07/
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                    <Github className="h-5 w-5 text-portfolio-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-gray font-medium">GitHub 1 💻</p>
                    <a
                      href="https://github.com/putriitr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-dark hover:text-portfolio-purple transition-colors font-semibold"
                    >
                      github.com/putriitr
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                    <Github className="h-5 w-5 text-portfolio-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-gray font-medium">GitHub 2 💻</p>
                    <a
                      href="https://github.com/putrigultom11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-dark hover:text-portfolio-purple transition-colors font-semibold"
                    >
                      github.com/putrigultom11
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* <motion.div
              className="gen-z-card p-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="h-5 w-5 text-red-400 fill-current" />
                </motion.div>
                <h4 className="font-bold text-portfolio-dark text-lg group-hover:text-portfolio-blue transition-colors duration-300">
                  Looking for new opportunities 🎯
                </h4>
              </div>
              <p className="text-portfolio-gray leading-relaxed">
                I'm currently available for freelance projects, full-time positions,
                or consulting work. Let's discuss how I can contribute to your team! 🚀
              </p>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
