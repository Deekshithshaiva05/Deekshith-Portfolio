import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { simpleBlogPosts } from '../../data/simpleBlogPosts';

const BlogSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sort posts by date (newest first) - show all posts
  const allPosts = simpleBlogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Auto-scroll effect
  useEffect(() => {
    if (!inView || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.4; // pixels per frame - slightly slower for better reading
    const maxScroll = container.scrollWidth - container.clientWidth;

    const autoScroll = () => {
      if (scrollAmount < maxScroll) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;
        requestAnimationFrame(autoScroll);
      } else {
        // Reset to beginning for continuous loop
        setTimeout(() => {
          scrollAmount = 0;
          container.scrollLeft = 0;
          requestAnimationFrame(autoScroll);
        }, 2500); // Slightly longer pause for better user experience
      }
    };

    const timeoutId = setTimeout(() => {
      if (inView) {
        requestAnimationFrame(autoScroll);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-primary-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Latest Blog Posts
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights and tutorials on AI/ML, web development, and technology trends.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative"
        >
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
            style={{ 
              scrollbarWidth: 'thin', 
              scrollbarColor: '#a0aec0 #edf2f7',
              scrollBehavior: 'smooth'
            }}
          >
          {allPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 group min-w-[350px] max-w-sm flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    {post.category.toUpperCase()}
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
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => {
                    // Scroll to blog section to highlight this post
                    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.article>
          ))}
          </div>
          
          {/* Fade effects on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;
