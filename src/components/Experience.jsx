import { experiences } from '../data/content';
import SectionHeading from './SectionHeading';

function ExperienceItem({ experience }) {
  return (
    <li className="group mb-12 transition-opacity lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
      <div className="relative rounded-lg p-4 transition-colors lg:-inset-x-4 lg:rounded-lg lg:p-0 lg:hover:bg-white/40 dark:lg:hover:bg-slate-800/20">
        <div className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-8 sm:items-start sm:gap-8 md:gap-4">
          <div className="sm:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{experience.date}</span>
          </div>
          <div className="sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-100">{experience.title}</h3>
            <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{experience.company}</div>
            <ul className="mt-3 space-y-2">
              {experience.description.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {experience.tags.map((tag, i) => (
                <span key={i} className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium leading-5 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading title="工作经历">
        <ol className="group/list">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </ol>
      </SectionHeading>
    </section>
  );
}
