import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface ProjectLinkRedirectProps {
  href: string;
  type: 'demo' | 'github';
  className?: string;
  title?: string;
}

const ProjectLinkRedirect = ({ href, type, className, title }: ProjectLinkRedirectProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const isValidLink = href && href !== '#' && href !== '';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isValidLink) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      // Show appropriate message based on link type
      if (type === 'demo') {
        setModalMessage('Demo coming soon! This project is currently under development.');
      } else {
        setModalMessage('Code is private at the moment. This repository is not publicly available.');
      }
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={className}
        title={title}
        type="button"
      >
        {type === 'github' ? (
          <Github className="h-5 w-5 text-slate-900" />
        ) : (
          <ExternalLink className="h-5 w-5 text-slate-900" />
        )}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full p-6 relative animate-fade-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {type === 'github' ? (
                  <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                ) : (
                  <ExternalLink className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {type === 'demo' ? 'Demo Not Available' : 'Private Repository'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {modalMessage}
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectLinkRedirect;