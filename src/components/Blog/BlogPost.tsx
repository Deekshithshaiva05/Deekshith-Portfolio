import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import type { BlogPost as BlogPostType } from '../../data/blogPosts';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 font-medium"
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </motion.button>

      {/* Featured Image */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Post Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
            {post.category.replace('-', ' ').toUpperCase()}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-b border-gray-200 dark:border-gray-700 py-4">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {post.excerpt}
          </p>
          <button className="ml-4 p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Post Content */}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Post Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{post.author}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AI/ML Engineering Student & Tech Enthusiast
              </p>
            </div>
          </div>
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Follow
          </button>
        </div>
      </footer>
    </motion.article>
  );
};

export default BlogPost;