import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Blog = () => {
  const categories = [
    { name: 'Brand Strategy', count: 12, color: 'bg-blue-100 text-blue-800' },
    { name: 'Strategic Storytelling', count: 8, color: 'bg-orange-100 text-orange-800' },
    { name: 'Media & Influence', count: 15, color: 'bg-purple-100 text-purple-800' },
    { name: 'Crisis Communication', count: 6, color: 'bg-red-100 text-red-800' },
    { name: 'Thought Leadership', count: 10, color: 'bg-green-100 text-green-800' }
  ];

  const featuredPost = {
    title: 'The Future of Brand Storytelling: Why Authenticity Beats Perfection',
    excerpt: 'In an era of information overload, brands that dare to be vulnerable and authentic are the ones that truly connect with their audiences. Here\'s how to craft stories that resonate.',
    author: 'Pascaline Khoza',
    date: '2024-01-15',
    category: 'Strategic Storytelling',
    readTime: '8 min read',
    image: 'Modern storytelling concept with authentic brand narrative elements and emotional connection'
  };

  const blogPosts = [
    {
      title: 'Building Media Relationships That Last: A Strategic Approach',
      excerpt: 'Learn how to cultivate meaningful relationships with journalists and media professionals that go beyond transactional interactions.',
      author: 'Marcus Johnson',
      date: '2024-01-12',
      category: 'Media & Influence',
      readTime: '6 min read',
      image: 'Professional networking event with journalists and PR professionals'
    },
    {
      title: 'Crisis Communication in the Digital Age: Lessons from Recent Cases',
      excerpt: 'Analyzing recent crisis communication successes and failures to extract actionable insights for modern brands.',
      author: 'Elena Rodriguez',
      date: '2024-01-10',
      category: 'Crisis Communication',
      readTime: '10 min read',
      image: 'Crisis management team working on digital communication strategy'
    },
    {
      title: 'From Startup to Thought Leader: A 12-Month Positioning Strategy',
      excerpt: 'A comprehensive guide to establishing thought leadership in your industry, with real examples and actionable steps.',
      author: 'Pascaline Khoza',
      date: '2024-01-08',
      category: 'Thought Leadership',
      readTime: '12 min read',
      image: 'Business leader speaking at industry conference with engaged audience'
    },
    {
      title: 'The Psychology of Brand Positioning: What Your Audience Really Wants',
      excerpt: 'Understanding the psychological drivers behind consumer behavior and how to position your brand accordingly.',
      author: 'Marcus Johnson',
      date: '2024-01-05',
      category: 'Brand Strategy',
      readTime: '7 min read',
      image: 'Consumer psychology research with brand positioning insights'
    },
    {
      title: 'Measuring PR Success: Beyond Vanity Metrics',
      excerpt: 'Discover the KPIs that actually matter for PR success and how to track meaningful impact on your business goals.',
      author: 'Elena Rodriguez',
      date: '2024-01-03',
      category: 'Brand Strategy',
      readTime: '9 min read',
      image: 'Analytics dashboard showing PR performance metrics and ROI'
    },
    {
      title: 'The Art of the Press Release: Making News in a Noisy World',
      excerpt: 'How to craft press releases that journalists actually want to read and share, with templates and examples.',
      author: 'Pascaline Khoza',
      date: '2024-01-01',
      category: 'Media & Influence',
      readTime: '5 min read',
      image: 'Journalist reading compelling press release in modern newsroom'
    }
  ];

  const handleReadMore = (title) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Blog - Swell PR & Communications Insights</title>
        <meta name="description" content="Expert insights on brand strategy, strategic storytelling, media relations, and communications from the Swell PR team." />
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
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Strategic insights, industry trends, and expert perspectives on PR, communications, and brand building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleReadMore(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${category.color}`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 text-center mb-2">
              Featured Article
            </h2>
            <p className="text-slate-600 text-center">Our latest insights and expert perspectives</p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  className="w-full h-64 lg:h-full object-cover"
                  alt={featuredPost.title}
                 src="https://images.unsplash.com/photo-1686643184179-e4b65e15022e" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-500 text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-600 text-sm">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 text-slate-400 ml-2" />
                    <span className="text-slate-600 text-sm">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <Button 
                    onClick={() => handleReadMore(featuredPost.title)}
                    className="gradient-coral text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, strategies, and insights from our team of communications experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={post.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      post.category === 'Brand Strategy' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'Strategic Storytelling' ? 'bg-orange-100 text-orange-800' :
                      post.category === 'Media & Influence' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'Crisis Communication' ? 'bg-red-100 text-red-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-600 text-sm">{post.author}</span>
                    </div>
                    
                    <button 
                      onClick={() => handleReadMore(post.title)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-300"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-ocean relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get our latest insights, industry trends, and strategic tips delivered directly to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <Button 
                  onClick={() => toast({
                    title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  className="gradient-coral text-white hover:shadow-lg transition-all duration-300 px-6 py-3"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-blue-200 text-sm mt-3">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;