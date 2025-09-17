import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Waves, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Insights', path: '/insights' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms & Conditions', path: '/terms' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Strategy & Positioning', path: '/services' },
        { name: 'PR & Media Relations', path: '/services' },
        { name: 'Editorial & Content', path: '/services' },
        { name: 'Speaking & Visibility', path: '/services' },
        { name: 'Custom Projects', path: '/services' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <footer className="gradient-ocean text-white relative overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 wave-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full floating"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-orange-400/10 rounded-full floating" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300/10 rounded-full floating" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <Link to="/" className="flex items-center space-x-2 group mb-4">
                  <Waves className="h-8 w-8 text-white group-hover:text-orange-400 transition-colors duration-300" />
                  <span className="text-2xl font-serif font-bold">Swell</span>
                </Link>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  We help brave brands say the right thing — on purpose! Making waves in PR & Communications.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-orange-400" />
                    <span className="text-blue-100">hello@swellpr.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-orange-400" />
                    <span className="text-blue-100">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-orange-400" />
                    <span className="text-blue-100">New York, NY</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-lg font-semibold mb-4 block text-white">
                  {section.title}
                </span>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-blue-100 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Media & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-blue-400/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-blue-100 font-medium">Follow Us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-orange-400 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-white group-hover:text-white" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="flex items-center space-x-4">
                <span className="text-blue-100 font-medium">Stay Updated:</span>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <button className="px-6 py-2 gradient-coral rounded-r-lg hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <span className="text-blue-100 text-sm">
                © {currentYear} Swell PR & Communications. All rights reserved.
              </span>
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-blue-100 hover:text-orange-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-blue-100 hover:text-orange-400 transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;