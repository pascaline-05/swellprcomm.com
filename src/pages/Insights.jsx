import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, FileText, BarChart, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import medium1 from '../../assets/medium-article-1.jpg';
import medium2 from '../../assets/medium-article-2.jpg';
import medium3 from '../../assets/medium-article-3.jpg';
import medium4 from '../../assets/medium-article-4.jpg';

const Insights = () => {
  const resources = [
    {
      icon: FileText,
      title: 'The Ultimate PR Toolkit for Startups',
      description: 'A comprehensive guide with templates, checklists, and strategies to help startups build a strong PR foundation.',
      type: 'E-book',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart,
      title: '2024 Media Landscape Report',
      description: 'An in-depth analysis of current media trends, journalist preferences, and opportunities for brands to gain visibility.',
      type: 'Report',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Lightbulb,
      title: 'Crisis Communication Checklist',
      description: 'A step-by-step checklist to prepare for and navigate a communications crisis effectively.',
      type: 'Checklist',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Thought Leadership Content Planner',
      description: 'A template to help you plan and execute a thought leadership content strategy that positions you as an industry expert.',
      type: 'Template',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart,
      title: 'Case Study: How We Secured 100+ Media Placements for a Tech Brand',
      description: 'A detailed case study showcasing our strategies and results for a successful PR campaign.',
      type: 'Case Study',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Lightbulb,
      title: 'Webinar: The Future of AI in Public Relations',
      description: 'A recording of our recent webinar exploring how artificial intelligence is transforming the PR industry.',
      type: 'Webinar',
      color: 'from-red-500 to-red-600'
    }
  ];

  const mediumArticles = [
    {
      title: "Executive Profiling Isn't Vanity — It's Strategy",
      description: "Your founder isn't just building a product, they're shaping a movement. Your CEO isn't just leading a team, they're defining your industry.",
      url: "https://medium.com/@swellprcomm/executive-profiling-isnt-vanity-it-s-strategy-6d62e150d7c6",
      image: medium1,
      date: "Sep 8, 2025"
    },
    {
      title: "Less Noise, More Meaning: The Case for Strategic Silence",
      description: "The age of overcommunication — why knowing when to say nothing is the sharpest communications strategy left.",
      url: "https://medium.com/@swellprcomm/less-noise-more-meaning-the-case-for-strategic-silence-afd21c157366",
      image: medium2,
      date: "Aug 20, 2025"
    },
    {
      title: "What Journalists Really Want: The Anatomy of a Great Media Pitch",
      description: "Relevant, timely and useful pitches land coverage — here is what journalists actually want, and how to hand it to them.",
      url: "https://medium.com/@swellprcomm/what-journalists-really-want-the-anatomy-of-a-great-media-pitch-b751682a6f64",
      image: medium3,
      date: "Jun 29, 2025"
    },
    {
      title: "The Power of Strategic Storytelling: How Founders Can Shape Public Perception",
      description: "In a world saturated with content it isn't the loudest voice that wins — it's the most resonant story.",
      url: "https://medium.com/@swellprcomm/the-power-of-strategic-storytelling-how-founders-can-shape-public-perception-8c186e9a564c",
      image: medium4,
      date: "Jun 21, 2025"
    }
  ];

  const handleDownload = (title) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Insights & Resources - Swell PR & Communications</title>
        <meta name="description" content="Downloadable resources, reports, and thought leadership from Swell PR & Communications to help you master your brand's narrative." />
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
              Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Curated thought pieces, downloadable resources, and expert analysis to help you navigate the world of communications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">
              Our Latest Resources
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Download our free resources to gain valuable insights and practical tools for your brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full bg-slate-100 text-slate-700`}>
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex-grow">
                    {resource.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <Button 
                    onClick={() => handleDownload(resource.title)}
                    className="w-full gradient-coral text-white hover:shadow-lg transition-all duration-300 mt-auto"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medium Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
                From Our Medium
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl">
                Four pieces worth your time — published on Medium, read in full there.
              </p>
            </div>
            <Button 
              asChild
              variant="outline"
              className="gradient-ocean text-white hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              <a href="https://medium.com/@swellprcomm" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <span>Follow on Medium</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediumArticles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-slate-100 text-slate-700 mb-4 inline-block">
                    Medium · {article.date}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 flex-grow group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Swell PR & Communications</span>
                    <span className="group-hover:text-blue-600 transition-colors">Read on Medium →</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">
              Looking for More?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Check out our blog for the latest articles, trends, and strategic advice from our team of experts.
            </p>
            
            <Button 
              asChild
              size="lg"
              className="gradient-ocean text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <a href="/blog" className="flex items-center space-x-2">
                <span>Visit Our Blog</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Insights;