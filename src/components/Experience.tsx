import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, Award } from 'lucide-react';
import { resumeData } from '../data/resume';
import { cn } from '../lib/utils';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group relative p-6 rounded-2xl border transition-all duration-300",
                  expandedIndex === index 
                    ? "bg-white/10 border-blue-500/50 shadow-2xl shadow-blue-500/10" 
                    : "bg-white/5 border-white/10 hover:border-white/20"
                )}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-white/50">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {exp.company}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.dates}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <ChevronDown 
                      className={cn(
                        "w-6 h-6 text-white/30 transition-transform duration-300",
                        expandedIndex === index && "rotate-180 text-blue-500"
                      )} 
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-6 space-y-3">
                        {exp.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start text-white/70 leading-relaxed">
                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20"
            >
              <div className="flex items-center mb-4 text-blue-400">
                <Award className="w-6 h-6 mr-2" />
                <h3 className="font-bold uppercase tracking-wider text-sm">Impact Highlights</h3>
              </div>
              <div className="space-y-4">
                {resumeData.achievements.map((ach, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-lg font-bold text-white mb-1">{ach.item}</div>
                    <div className="text-xs text-white/40">{ach.context}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-bold mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
