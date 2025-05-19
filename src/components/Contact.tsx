
import { useState } from 'react';
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

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-gray-300 max-w-2xl mb-10">
          I'm currently looking for new opportunities. Whether you have a question, 
          a project idea, or just want to say hi, I'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-white">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                />
              </div>
              <Button type="submit" className="btn-primary w-full">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-xl font-bold mb-6 text-white">Connect with me</h3>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mr-4">
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
              </div>
              
              <div className="flex items-center">
                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mr-4">
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
              </div>
              
              <div className="flex items-center">
                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mr-4">
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
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gray-800 rounded-lg">
              <h4 className="font-bold text-white mb-2">Looking for new opportunities</h4>
              <p className="text-gray-300">
                I'm currently available for freelance projects, full-time positions, 
                or consulting work. Let's discuss how I can contribute to your team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
