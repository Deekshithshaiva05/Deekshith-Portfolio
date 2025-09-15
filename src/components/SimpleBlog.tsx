import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Search, BookOpen } from 'lucide-react';
import { simpleBlogPosts, categories, type SimpleBlogPost } from '../data/simpleBlogPosts';

const SimpleBlog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<SimpleBlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on category and search
  const filteredPosts = simpleBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (post: SimpleBlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If viewing a single post
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Simple Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">TechBlog</h1>
              <button
                onClick={handleBackClick}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </button>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full mb-4">
                {selectedPost.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedPost.title}
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">{selectedPost.author}</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
              </div>
            </div>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </article>
        </main>

        {/* Simple Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 TechBlog by Deekshith N. All rights reserved.</p>
          </div>
        </footer>
      </div>
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BookOpen className="w-8 h-8" />
              <div>
                <h1 className="text-3xl font-bold">TechBlog</h1>
                <p className="text-primary-100 text-sm">by Deekshith N</p>
              </div>
            </div>
            <button
              onClick={handleBackClick}
              className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-10 h-10 mr-3" />
              <h1 className="text-4xl font-bold">TechBlog</h1>
            </div>
            <p className="text-primary-100 text-lg">Insights on AI/ML, Web Development & Technology</p>
            <p className="text-primary-200 text-sm mt-2">by Deekshith N</p>
            <button
              onClick={() => window.location.href = '/'}
              className="mt-4 inline-flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-primary-200" />
            <h2 className="text-5xl font-bold mb-6">Welcome to My Blog</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge about technology, programming, and career development
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                  />
                </div>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  onClick={() => handlePostClick(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No posts found */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No posts found</h3>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            )}
          </main>

            className="w-full h-80 object-cover rounded-xl mb-8 shadow-lg"
          <aside className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 sticky top-8">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full mb-6">
                Hi! I'm Deekshith N, an AI/ML engineering student sharing insights about technology and programming.
              </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Categories</h4>
              <div className="space-y-1">
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
              </div>
                  >
                    {category}
                  </button>
                ))}
            className="prose prose-xl dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300"
            </div>
          </aside>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary-400" />
            <h3 className="text-xl font-bold text-primary-400 mb-2">TechBlog</h3>
          </div>
          <p className="text-gray-400">&copy; 2024 TechBlog by Deekshith N. All rights reserved.</p>
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary-400" />
            <h3 className="text-xl font-bold text-primary-400 mb-2">TechBlog</h3>
          </div>
          <p className="text-gray-400">&copy; 2024 TechBlog by Deekshith N. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SimpleBlog;