import { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const runtime = (window as any).LeadGenRuntime;
      if (runtime && typeof runtime.insertData === 'function') {
        await runtime.insertData('messages', data);
        alert('Message sent successfully! I will get back to you soon.');
      } else {
        console.log('LeadGenRuntime not available — message data:', data);
        alert('Thanks for your message! (Demo mode: message logged)');
      }
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      alert('An error occurred sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-6">
              Let's Collaborate
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              I'm always open to discussing new projects, teaching opportunities, or mentorship requests. Whether you need a network solution or an IT instructor, let's connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-slate-900 dark:text-white">Location</p>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">Rangjung/Trashigang, Bhutan</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-slate-900 dark:text-white">Email</p>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">pemarekdendorjee@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-slate-900 dark:text-white">Availability</p>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">Mon - Fri, 9am - 5pm (Bhutan Time)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3 px-4"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3 px-4"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 py-3 px-4"
                    placeholder="How can we work together?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : <><Send className="h-4 w-4 mr-2" /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;