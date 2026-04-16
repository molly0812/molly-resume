import { skillCategories } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading title="技能">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div key={index} className="rounded-lg border border-white/60 bg-white/60 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/40 dark:shadow-none">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="rounded-full bg-primary-500/10 px-3 py-1.5 text-xs font-medium text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionHeading>
    </section>
  );
}
