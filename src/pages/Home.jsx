import React from 'react';
import heroImage from '../../assets/hero-image.jpeg.jpg';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Users, TrendingUp, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sansLogo from '../../assets/client-sans-mercantile.png';
import privLogo from '../../assets/client-priv.png';
import omegaLogo from '../../assets/client-omega.png';
import brigitLogo from '../../assets/client-brigit.png';

const Home = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategy & Positioning',
      description: 'Define your brand voice and market position with precision and purpose.'
    },
    {
      icon: Users,
      title: 'PR & Media Relations',
      description: 'Build meaningful relationships with media and amplify your story.'
    },
    {
      icon: Zap,
      title: 'Editorial & Content',
      description: 'Create compelling content that resonates with your audience.'
    },
    {
      icon: TrendingUp,
      title: 'Speaking & Visibility',
      description: 'Position your leaders as thought leaders in your industry.'
    }
  ];

  const testimonials = [
    {
      quote: "We don't tolerate noise. Swell gave us signal — positioning as precise as the architecture we ship.",
      author: "Sans Mercantile",
      role: "AI-Driven Global Trade & Predictive Analytics",
      logo: sansLogo,
      rating: 5
    },
    {
      quote: "They turned institutional-grade complexity into a narrative the market could actually parse. Rigorous, lean, no fluff.",
      author: "Priv",
      role: "Wealth Intelligence & Market Dynamics",
      logo: privLogo,
      rating: 5
    },
    {
      quote: "Swell understood the mission before we closed the brief. The story carries the same precision as the science.",
      author: "Omega",
      role: "Medical AI & Consciousness Ecosystem",
      logo: omegaLogo,
      rating: 5
    },
    {
      quote: "In 195 jurisdictions, clarity is compliance. Swell built us a voice as rigorous as the frameworks we monitor.",
      author: "Brigit",
      role: "Legal & Regulatory Intelligence",
      logo: brigitLogo,
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Swell PR & Communications - We Help Brave Brands Say the Right Thing</title>
        <meta name="description" content="Strategic PR and communications agency helping brave brands tell their story with purpose. Expert services in strategy, media relations, content, and visibility." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 gradient-ocean"></div>
        <div className="absolute inset-0 wave-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full floating"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/20 rounded-full floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-orange-300/20 rounded-full floating" style={{ animationDelay: '4s' }}></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              We help brave brands
              <span className="block text-gradient bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                say the right thing
              </span>
              <span className="text-3xl md:text-4xl block mt-2">— on purpose!</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
               Strategic messaging, voice, and communications campaigns for founders who believe clarity is power (and personality is not optional).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                asChild
                size="lg"
                className="gradient-coral text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Let's Make Waves</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-800 transition-all duration-300 text-lg px-8 py-4"
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-32 right-10 hidden lg:block"
        >
          <video
            className="w-96 h-56 rounded-2xl object-cover shadow-2xl border-4 border-white/20 floating"
            autoPlay
            loop
            muted
            playsInline
            poster={heroImage}
            src="https://media.storyblocks.com/video/352684198/preview.mp4"
          />
        </motion.div>

        {/* Small Hero Image Circle below video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <img
            className="w-24 h-24 rounded-full object-cover shadow-2xl border-4 border-white/20 floating"
            alt="Swell PR & Communications Hero Circle"
            src={heroImage}
          />
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From strategy to execution, we provide comprehensive PR and communications services that make your brand impossible to ignore.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 gradient-coral rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              asChild
              size="lg"
              className="gradient-ocean text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Link to="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what brave brands have to say about working with Swell.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t pt-4 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/80 p-2 flex items-center justify-center shadow-sm">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.author} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.author}</p>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-ocean relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Make Waves?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's work together to tell your story in a way that creates impact, builds connections, and drives results.
            </p>
            
            <Button 
              asChild
              size="lg"
              className="gradient-coral text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;