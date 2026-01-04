
import { ArrowRight, Tag, Clock } from 'lucide-react';
import { blog1, blog2 } from '../images';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Introduction to Zend Framework for PHP Developers',
      excerpt: 'A comprehensive guide to getting started with Zend Framework, covering architecture, modules, and best practices for enterprise apps.',
      category: 'Development',
      readTime: '8 min read',
      image: blog1,
      date: 'Mar 15, 2024'
    },
    {
      id: 2,
      title: 'Network Security Basics for Small Businesses',
      excerpt: 'Essential hardware configurations and firewall rules that every small office network needs to implement to stay secure.',
      category: 'Networking',
      readTime: '6 min read',
      image: blog2,
      date: 'Feb 28, 2024'
    },
    {
      id: 3,
      title: 'Teaching Tech: Bridging the Gap',
      excerpt: 'Reflections on moving from industry to education and how practical experience shapes effective teaching methodologies.',
      category: 'Education',
      readTime: '5 min read',
      image: blog1,
      date: 'Jan 10, 2024'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-2 text-xl text-slate-500 dark:text-slate-400">
              Thoughts on technology, teaching, and code.
            </p>
          </div>
          <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-500 transition-colors">
            View all posts <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100 dark:border-slate-800 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  <a href="#" className="hover:text-primary-600 transition-colors">{post.title}</a>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                   <span className="text-xs text-slate-400">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;