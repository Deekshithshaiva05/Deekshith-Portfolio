import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { simpleBlogPosts } from '../../data/simpleBlogPosts';

const BlogSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sort posts by date (newest first) - show all posts
  const allPosts = simpleBlogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Check scroll state
  const checkScrollState = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Manual scroll functions
  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    setIsAutoScrolling(false);
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    setIsAutoScrolling(false);
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!inView || !scrollContainerRef.current || isAutoScrolling === false) return;

    const container = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 0.8; // Faster scrolling
    const maxScroll = container.scrollWidth - container.clientWidth;

    const autoScroll = () => {
      if (scrollAmount < maxScroll && isAutoScrolling !== false) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;
        requestAnimationFrame(autoScroll);
      } else if (isAutoScrolling !== false) {
        // Reset to beginning for continuous loop
        setTimeout(() => {
          if (isAutoScrolling !== false) {
            scrollAmount = 0;
            container.scrollLeft = 0;
            requestAnimationFrame(autoScroll);
          }
        }, 2000); // Shorter pause for faster experience
      }
    };

    const timeoutId = setTimeout(() => {
      if (inView && isAutoScrolling !== false) {
        setIsAutoScrolling(true);
        requestAnimationFrame(autoScroll);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inView, isAutoScrolling]);

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      checkScrollState();
    };

    container.addEventListener('scroll', handleScroll);
    checkScrollState(); // Initial check

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          {/* Scroll Buttons */}
          <motion.button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollLeft 
                ? 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110' 
                : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
            }`}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center transition-all duration-300 ${
              canScrollRight 
                ? 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110' 
                : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
            }`}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

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
