import React from 'react';
import { resumeData } from '../data/resume';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-2xl font-bold tracking-tighter text-white mb-2">
            <span className="text-blue-500">S</span>V
          </div>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {resumeData.basics.name}. Built with passion and AI.
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          {resumeData.basics.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/40 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
