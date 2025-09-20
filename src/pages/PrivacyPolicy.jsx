import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, fill out a form, request information, or communicate with us. This may include your name, email address, phone number, company name, job title, and any other information you choose to provide.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect certain information about your use of our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.'
        },
        {
          subtitle: 'Cookies and Tracking Technologies',
          text: 'We use cookies, web beacons, and other tracking technologies to collect information about your browsing activities and to provide you with a more personalized experience.'
        }
      ]
    },
    {
      icon: Users,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your account or our services.'
        },
        {
          subtitle: 'Marketing Communications',
          text: 'With your consent, we may send you marketing communications about our services, industry insights, and other information we think may interest you. You can opt out at any time.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We use your information to understand how our services are used, to improve our website and services, and to develop new features and offerings.'
        }
      ]
    },
    {
      icon: Lock,
      title: 'Information Sharing and Disclosure',
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, email delivery, and customer support.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities, such as a court or government agency.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.'
        },
        {
          subtitle: 'International Transfers',
          text: 'Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.'
        }
      ]
    }
  ];

  const rights = [
    'Access: You can request access to the personal information we hold about you.',
    'Correction: You can request that we correct any inaccurate or incomplete information.',
    'Deletion: You can request that we delete your personal information, subject to certain exceptions.',
    'Portability: You can request a copy of your personal information in a structured, machine-readable format.',
    'Objection: You can object to our processing of your personal information in certain circumstances.',
    'Restriction: You can request that we restrict the processing of your personal information.'
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Swell PR & Communications</title>
        <meta name="description" content="Learn how Swell PR & Communications collects, uses, and protects your personal information. Our commitment to your privacy and data security." />
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-blue-200 mt-4">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div></section>

      {/* Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-slate-700">
            <p className="mb-8 text-lg leading-relaxed">
              Swell PR & Communications ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                    <section.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6 pl-16">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{item.subtitle}</h3>
                      <p className="leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
                  Your Rights (GDPR)
                </h2>
              </div>
              <div className="pl-16">
                <p className="mb-6 leading-relaxed">
                  If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  {rights.map((right, index) => (
                    <li key={index} className="leading-relaxed">{right}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
                  Contact Us
                </h2>
              </div>
              <div className="pl-16">
                <p className="leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>Email: privacy@swellprcomm.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>Phone: +27 (67) 964-7881</span>
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

export default PrivacyPolicy;