import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Layout, BarChart3, Wrench, Terminal } from 'lucide-react';
import { resumeData } from '../data/resume';

const iconMap: Record<string, any> = {
  'Programming': Terminal,
  'Machine Learning': Code2,
  'Web Development': Layout,
  'Data Visualization': BarChart3,
  'Tools': Wrench,
  'Databases': Database
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-white/40 max-w-xl mx-auto">
            A comprehensive overview of the technologies and tools I leverage to build intelligent solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.category] || Code2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-white/60 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
