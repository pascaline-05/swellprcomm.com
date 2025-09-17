import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: HelpCircle,
      questions: [
        {
          question: 'How do I know if my brand needs PR services?',
          answer: 'If you\'re looking to increase brand awareness, build credibility, manage your reputation, launch a new product, or establish thought leadership, PR services can be invaluable. We offer free consultations to assess your specific needs and determine how we can help achieve your goals.'
        },
        {
          question: 'What information do you need to get started?',
          answer: 'We\'ll need to understand your business goals, target audience, current marketing efforts, competitive landscape, and any specific challenges you\'re facing. During our discovery call, we\'ll gather all the necessary information to create a customized strategy for your brand.'
        },
        {
          question: 'How long does it take to see results from PR efforts?',
          answer: 'PR is a long-term strategy that builds momentum over time. While some tactics like press releases can generate immediate coverage, building brand awareness and thought leadership typically takes 3-6 months to show significant results. We provide regular reporting to track progress and adjust strategies as needed.'
        },
        {
          question: 'Do you work with businesses of all sizes?',
          answer: 'Yes! We work with startups, mid-size companies, and established enterprises. Our strategies are tailored to each client\'s budget, goals, and growth stage. Whether you\'re launching your first product or expanding into new markets, we can create a program that fits your needs.'
        }
      ]
    },
    {
      title: 'Services & Strategy',
      icon: MessageCircle,
      questions: [
        {
          question: 'What\'s included in your PR strategy development?',
          answer: 'Our strategy development includes comprehensive market research, competitive analysis, audience segmentation, key messaging framework, media landscape mapping, goal setting with KPIs, tactical planning, and timeline development. We ensure every strategy aligns with your business objectives.'
        },
        {
          question: 'How do you measure PR success?',
          answer: 'We track multiple metrics including media coverage quality and reach, brand mention sentiment, website traffic from PR efforts, lead generation, social media engagement, thought leadership positioning, and ultimately, impact on business goals. We provide detailed monthly reports with actionable insights.'
        },
        {
          question: 'Can you help with crisis communication?',
          answer: 'Absolutely. We provide both proactive crisis preparation (developing response plans, training spokespeople) and reactive crisis management (immediate response, stakeholder communication, reputation recovery). Our team has extensive experience managing various types of crises across different industries.'
        },
        {
          question: 'Do you offer content creation services?',
          answer: 'Yes, our editorial and content services include blog writing, press releases, thought leadership articles, social media content, newsletter campaigns, website copy, and presentation materials. All content is strategically crafted to support your PR objectives and brand voice.'
        }
      ]
    },
    {
      title: 'Working Together',
      icon: Phone,
      questions: [
        {
          question: 'What does the onboarding process look like?',
          answer: 'After signing our agreement, we begin with a comprehensive discovery session, conduct market research, develop your strategic plan, create initial content and materials, set up reporting systems, and launch your first campaigns. The entire onboarding process typically takes 2-3 weeks.'
        },
        {
          question: 'How often will we communicate during our engagement?',
          answer: 'We believe in transparent, regular communication. You\'ll have weekly check-ins with your account team, monthly strategy reviews, quarterly business reviews, and access to our team via email and phone. We also provide real-time updates on any significant developments or opportunities.'
        },
        {
          question: 'Can we adjust our strategy as we go?',
          answer: 'Absolutely! PR is dynamic, and we regularly review and adjust strategies based on performance data, market changes, and evolving business goals. Our agile approach ensures your PR efforts remain effective and aligned with your objectives.'
        },
        {
          question: 'What if we need to pause or end our engagement?',
          answer: 'We understand business needs can change. Our contracts include clear terms for pausing or ending services. We\'ll ensure a smooth transition, provide all necessary materials and reports, and offer guidance on maintaining momentum independently if needed.'
        }
      ]
    },
    {
      title: 'Pricing & Contracts',
      icon: Mail,
      questions: [
        {
          question: 'How do you structure your pricing?',
          answer: 'We offer flexible pricing models including monthly retainers for ongoing services, project-based pricing for specific campaigns, and hybrid models combining both. Pricing depends on scope, complexity, and duration. We provide detailed proposals with transparent pricing for all services.'
        },
        {
          question: 'What\'s typically included in a monthly retainer?',
          answer: 'Monthly retainers typically include strategic planning, media outreach, content creation, relationship management, reporting and analytics, crisis support, and regular consultations. The specific services depend on your needs and retainer level.'
        },
        {
          question: 'Do you require long-term contracts?',
          answer: 'While we recommend longer engagements for maximum impact (6-12 months), we offer flexible contract terms. We have month-to-month options for certain services and project-based work. Our goal is to build long-term partnerships based on results, not just contracts.'
        },
        {
          question: 'Are there any additional costs I should know about?',
          answer: 'Our proposals include all standard services. Additional costs might include premium media monitoring tools, event expenses, paid media amplification, or specialized research. We always discuss and approve any additional expenses with you beforehand.'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Swell PR & Communications</title>
        <meta name="description" content="Find answers to common questions about Swell PR & Communications services, pricing, process, and how we can help your brand make waves." />
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about working with Swell PR & Communications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 gradient-coral rounded-full flex items-center justify-center mr-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const itemKey = `${categoryIndex}-${index}`;
                    const isOpen = openItems[itemKey];

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-300"
                        >
                          <h3 className="text-lg font-semibold text-slate-800 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-slate-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? We're here to help! Reach out to our team for personalized answers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="gradient-coral text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 transition-all duration-300"
              >
                <a href="tel:+15551234567">Call Us: (555) 123-4567</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 gradient-ocean">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Phone className="h-8 w-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
              <p className="text-blue-200 text-sm">Mon-Fri, 9am-6pm EST</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Mail className="h-8 w-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">hello@swellpr.com</p>
              <p className="text-blue-200 text-sm">We respond within 24 hours</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <MessageCircle className="h-8 w-8 mx-auto mb-4 text-orange-400" />
              <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
              <p className="text-blue-100">Free 30-min consultation</p>
              <p className="text-blue-200 text-sm">Discuss your PR needs</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;