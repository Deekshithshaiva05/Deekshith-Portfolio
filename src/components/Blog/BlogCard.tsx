import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  onReadMore: (postId: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onReadMore }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
            {post.category.replace('-', ' ').toUpperCase()}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime} min</span>
          </div>
        </div>

        <motion.button
          onClick={() => onReadMore(post.id)}
          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
          whileHover={{ x: 5 }}
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.article>
  );
};

export default BlogCard;