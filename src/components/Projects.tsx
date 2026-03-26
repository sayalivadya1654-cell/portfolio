import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Shield, Cpu, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resume';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-4 mb-8">
                  {project.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start text-white/60 leading-relaxed">
                      <Cpu className="w-4 h-4 mr-3 mt-1 text-blue-500/50 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <div className="flex gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {link.name} <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative aspect-video lg:aspect-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                <Rocket className="w-20 h-20 text-white/10 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
