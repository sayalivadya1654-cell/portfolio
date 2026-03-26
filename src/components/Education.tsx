import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { resumeData } from '../data/resume';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                    <p className="text-blue-400 font-medium">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2 text-sm text-white/40">
                  {edu.dates && (
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.dates}
                    </span>
                  )}
                  {edu.details && (
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-bold">
                      {edu.details}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
