import { projects } from '../data/content';
import SectionHeading from './SectionHeading';

const ArrowUpRightIcon = () => (
  <svg className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 1L14 1L14 8" /><path d="M1 15L14 2" />
  </svg>
);

function ProjectItem({ project }) {
  const Wrapper = project.link ? 'a' : 'div';
  const wrapperProps = project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <li className="group mb-12 transition-opacity lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
      <Wrapper {...wrapperProps} className="group/link block rounded-lg p-4 transition-colors lg:-inset-x-4 lg:rounded-lg lg:p-0 lg:hover:bg-white/40 dark:lg:hover:bg-slate-800/20">
        <div className="flex items-center gap-2">
          <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-100">{project.title}</h3>
          {project.link && <ArrowUpRightIcon />}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
        {project.image && (
          <div className="mt-4 overflow-hidden rounded-lg">
            <img src={project.image} alt={project.title} className="w-full object-cover transition-transform group-hover/link:scale-105" loading="lazy" />
          </div>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium leading-5 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">{tag}</span>
          ))}
        </div>
      </Wrapper>
    </li>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading title="工作成果">
        <ul className="group/list">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      </SectionHeading>
    </section>
  );
}
