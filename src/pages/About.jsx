import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Lightbulb, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We believe in genuine storytelling that reflects your true brand essence.'
    },
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every strategy we create is designed with clear intent and measurable outcomes.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as an extension of your team, not just an external agency.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of trends and embrace new ways to tell compelling stories.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Brands Transformed' },
    { number: '500M+', label: 'Media Impressions' },
    { number: '95%', label: 'Client Retention' },
    { number: '50+', label: 'Industry Awards' }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      bio: 'Former Fortune 500 communications director with 15+ years of experience.',
      image: 'Professional woman in business attire with confident smile'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Strategy',
      bio: 'Award-winning strategist specializing in brand positioning and market analysis.',
      image: 'Professional man in modern office setting with strategic documents'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Media Relations Director',
      bio: 'Former journalist with extensive media network and storytelling expertise.',
      image: 'Professional woman with media background in contemporary workspace'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Swell PR & Communications</title>
        <meta name="description" content="Learn about Swell PR & Communications - our vision, mission, values, and the team behind strategic communications that make waves." />
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
              About Swell
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're a team of strategic communicators, storytellers, and brand builders who believe every brave brand deserves to make waves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2024, Swell PR & Communications emerged from a simple belief: that every brand has a unique story worth telling, and when told with purpose and precision, these stories have the power to create meaningful change.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We're not your typical PR agency. We're strategic partners who dive deep into understanding your brand's essence, your audience's needs, and the market dynamics that shape your industry.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team combines decades of experience in communications, journalism, marketing, and brand strategy to deliver results that go beyond traditional metrics—we create lasting impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                alt="Swell PR team collaborating in modern office"
               src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-coral rounded-2xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="w-16 h-16 gradient-ocean rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the catalyst that transforms how brands communicate, creating a world where authentic storytelling drives meaningful connections and positive change across industries and communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="w-16 h-16 gradient-coral rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower brave brands with strategic communications that amplify their voice, build authentic relationships, and create lasting impact in their markets and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 gradient-coral rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-ocean">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The strategic minds and creative spirits behind Swell's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img 
                  className="w-full h-64 object-cover"
                  alt={`${member.name} - ${member.role}`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                alt="Unique approach to PR and communications strategy"
               src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
              <div className="absolute -top-6 -left-6 w-32 h-32 gradient-ocean rounded-2xl opacity-20"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
                What Makes Us Different
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Strategic First Approach</h3>
                    <p className="text-slate-600">We don't just execute tactics—we develop comprehensive strategies that align with your business objectives.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Data-Driven Insights</h3>
                    <p className="text-slate-600">Every decision is backed by research, analytics, and market intelligence to ensure maximum impact.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Integrated Communications</h3>
                    <p className="text-slate-600">We seamlessly blend PR, content marketing, and digital strategies for cohesive brand messaging.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;