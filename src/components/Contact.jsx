import { personalInfo } from '../data/content';
import SectionHeading from './SectionHeading';

const ArrowRightIcon = () => (
  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10" /><path d="M9 4l4 4-4 4" />
  </svg>
);

export default function Contact() {
  return (
    <>
      <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <SectionHeading title="联系我">
          <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">我目前正在寻找新的机会，欢迎通过邮件与我联系！</p>
          <a href={`mailto:${personalInfo.email}`} className="group inline-flex items-center gap-2 font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            {personalInfo.email}
            <ArrowRightIcon />
          </a>
        </SectionHeading>
      </section>
      <footer className="max-w-md pb-12 text-sm text-slate-500 dark:text-slate-500 sm:pb-0">
        <p>&copy; 2026 {personalInfo.name}. All rights reserved.</p>
        <p className="mt-1">Built with{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">React</a>
          {' + '}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">Tailwind CSS</a>
          {' + '}
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">Vite</a>
        </p>
      </footer>
    </>
  );
}
