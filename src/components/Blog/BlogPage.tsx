import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import BlogHeader from './BlogHeader';
import BlogHero from './BlogHero';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';
import BlogPost from './BlogPost';
import BlogFooter from './BlogFooter';
import { blogPosts } from '../../data/blogPosts';
import type { BlogPost as BlogPostType } from '../../data/blogPosts';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleReadMore = (postId: string) => {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      setSelectedPost(post);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('all');
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
        <BlogHeader onSearch={handleSearch} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BlogPost post={selectedPost} onBack={handleBackToBlog} />
        </main>
        <BlogFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <BlogHeader onSearch={handleSearch} />
      <BlogHero onReadMore={handleReadMore} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Results Header */}
            {(searchQuery || selectedCategory !== 'all') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {searchQuery ? `Search Results for "${searchQuery}"` : 
                   `Posts in ${selectedCategory.replace('-', ' ')}`}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Found {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
                </p>
              </motion.div>
            )}

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <BlogCard post={post} onReadMore={handleReadMore} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  No posts found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search terms or browse different categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Show All Posts
                </button>
              </motion.div>
            )}

            {/* Load More Button (for future pagination) */}
            {filteredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-colors">
                  Load More Posts
                </button>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar
              onCategoryFilter={handleCategoryFilter}
              onSearch={handleSearch}
              onReadMore={handleReadMore}
            />
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
};

export default BlogPage;