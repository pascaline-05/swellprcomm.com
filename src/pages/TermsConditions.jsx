import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Gavel, Shield, AlertTriangle, Mail, Phone } from 'lucide-react';

const TermsConditions = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      icon: Gavel,
      title: '1. Agreement to Terms',
      content: 'By accessing and using our website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website or services.'
    },
    {
      icon: FileText,
      title: '2. Services',
      content: 'Swell PR & Communications provides strategic PR and communications services as described on our website. The specific scope of services for each client will be detailed in a separate service agreement. We reserve the right to modify or discontinue any service at any time.'
    },
    {
      icon: Shield,
      title: '3. Intellectual Property',
      content: 'All content on this website, including text, graphics, logos, and images, is the property of Swell PR & Communications or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.'
    },
    {
      icon: AlertTriangle,
      title: '4. Limitation of Liability',
      content: 'Swell PR & Communications will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of our website or services. Our total liability for any claim arising from these terms or our services will not exceed the amount paid by you to us in the preceding six months.'
    },
    {
      icon: Gavel,
      title: '5. Governing Law',
      content: 'These Terms and Conditions are governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law principles. Any legal action or proceeding arising under these terms will be brought exclusively in the federal or state courts located in New York, NY.'
    },
    {
      icon: FileText,
      title: '6. Changes to Terms',
      content: 'We reserve the right to modify these Terms and Conditions at any time. We will notify you of any changes by posting the new terms on this page and updating the "Last updated" date. Your continued use of the website after any such changes constitutes your acceptance of the new terms.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Swell PR & Communications</title>
        <meta name="description" content="Read the Terms and Conditions for using the Swell PR & Communications website and services. Understand your rights and obligations." />
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
            <div className="w-20 h-20 gradient-coral rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website or services.
            </p>
            <p className="text-blue-200 mt-4">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-slate-700">
            <p className="mb-12 text-lg leading-relaxed">
              Welcome to Swell PR & Communications. These Terms and Conditions ("Terms") govern your use of our website and the services we provide. By accessing our website or using our services, you agree to comply with and be bound by these Terms.
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <section.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                        {section.title}
                      </h2>
                      <p className="leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 pt-12 border-t"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-6 text-center">
                Contact Us
              </h2>
              <p className="text-center leading-relaxed mb-8">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>Email: legal@swellpr.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>Phone: +1 (555) 123-4567</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;