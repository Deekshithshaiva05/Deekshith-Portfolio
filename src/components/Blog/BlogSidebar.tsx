import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User } from 'lucide-react';
import { blogCategories, recentPosts } from '../../data/blogPosts';

interface BlogSidebarProps {
  onCategoryFilter: (category: string) => void;
  onSearch: (query: string) => void;
  onReadMore: (postId: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ onCategoryFilter, onSearch, onReadMore }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <aside className="space-y-8">
      {/* Search Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Search Posts</h3>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </form>
      </motion.div>

      {/* Categories Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryFilter('all')}
            className="w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            All Posts
          </button>
          {blogCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryFilter(category.id)}
              className="w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex justify-between items-center"
            >
              <span>{category.name}</span>
              <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Recent Posts Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer" onClick={() => onReadMore(post.id)}>
              <div className="flex space-x-3">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white"
      >
        <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
        <p className="text-primary-100 mb-4 text-sm">
          Subscribe to get the latest posts delivered right to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </aside>
  );
};

export default BlogSidebar;