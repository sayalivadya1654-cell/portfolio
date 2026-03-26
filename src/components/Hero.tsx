import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resume';

const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Opportunities
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
            {resumeData.basics.name}
          </h1>
          
          <h2 className="text-xl md:text-3xl font-medium text-blue-400 mb-8 max-w-2xl mx-auto">
            {resumeData.basics.title}
          </h2>

          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
            {resumeData.basics.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToExperience}
              className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                View Experience
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            {resumeData.basics.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-blue-400 transition-all hover:scale-110"
                title={link.name}
              >
                {link.name === 'GitHub' && <Github className="w-8 h-8" />}
                {link.name === 'LinkedIn' && <Linkedin className="w-8 h-8" />}
                {link.name === 'Portfolio' && <ExternalLink className="w-8 h-8" />}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-blue-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
