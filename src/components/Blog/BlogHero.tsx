import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { featuredPosts } from '../../data/blogPosts';

interface BlogHeroProps {
  onReadMore: (postId: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({ onReadMore }) => {
  const featuredPost = featuredPosts[0];

  if (!featuredPost) return null;

  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              Featured Post
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {featuredPost.title}
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-200">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{featuredPost.readTime} min read</span>
              </div>
            </div>

            <motion.button
              onClick={() => onReadMore(featuredPost.id)}
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Full Article
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={featuredPost.featuredImage}
                alt={featuredPost.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;