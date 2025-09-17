import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, PenTool, Mic, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategy & Positioning',
      description: 'Define your brand voice and market position with precision and purpose.',
      features: [
        'Brand messaging framework',
        'Competitive analysis',
        'Market positioning strategy',
        'Audience segmentation',
        'Communication audit'
      ],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Users,
      title: 'PR & Media Relations',
      description: 'Build meaningful relationships with media and amplify your story.',
      features: [
        'Media strategy development',
        'Press release writing',
        'Media outreach campaigns',
        'Crisis communication',
        'Thought leadership positioning'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: PenTool,
      title: 'Editorial & Content',
      description: 'Create compelling content that resonates with your audience.',
      features: [
        'Content strategy development',
        'Blog writing & management',
        'Social media content',
        'Newsletter campaigns',
        'Website copywriting'
      ],
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Mic,
      title: 'Speaking & Visibility',
      description: 'Position your leaders as thought leaders in your industry.',
      features: [
        'Speaking opportunity identification',
        'Presentation coaching',
        'Conference strategy',
        'Panel discussion preparation',
        'Media training'
      ],
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Briefcase,
      title: 'Custom Projects',
      description: 'Tailored solutions for unique communication challenges.',
      features: [
        'Event communication strategy',
        'Product launch campaigns',
        'Rebranding communication',
        'Stakeholder engagement',
        'Special project management'
      ],
      color: 'from-indigo-600 to-indigo-700'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into understanding your brand, audience, and objectives to create a tailored communication strategy.'
    },
    {
      step: '02',
      title: 'Planning & Development',
      description: 'Our team develops comprehensive plans, creates compelling content, and prepares all necessary materials.'
    },
    {
      step: '03',
      title: 'Execution & Amplification',
      description: 'We implement the strategy across all channels, leveraging our network and expertise for maximum impact.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'We track performance, analyze results, and continuously optimize to ensure ongoing success.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>What We Do - Swell PR & Communications Services</title>
        <meta name="description" content="Comprehensive PR and communications services including strategy, media relations, content creation, speaking opportunities, and custom projects." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-ocean relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              What We Do
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive PR and communications services designed to amplify your brand voice and create meaningful connections with your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end communications solutions that drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures every project delivers maximum impact and measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 gradient-coral rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-center leading-relaxed">{step.description}</p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
                Why Choose Swell?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Proven Track Record</h3>
                    <p className="text-slate-600">Over 150 successful campaigns with measurable results and industry recognition.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Industry Expertise</h3>
                    <p className="text-slate-600">Deep knowledge across multiple sectors with specialized teams for each industry.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Integrated Approach</h3>
                    <p className="text-slate-600">Seamless integration of PR, content, and digital strategies for maximum impact.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Dedicated Partnership</h3>
                    <p className="text-slate-600">We work as an extension of your team, not just an external vendor.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                alt="Professional PR team delivering exceptional results"
               src="https://images.unsplash.com/photo-1604398094327-cb34d258d473" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-ocean rounded-2xl opacity-20"></div>
            </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help amplify your brand voice and achieve your communication goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="gradient-coral text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-800 transition-all duration-300 text-lg px-8 py-4"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;