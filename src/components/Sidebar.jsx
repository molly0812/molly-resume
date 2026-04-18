import { personalInfo, navItems } from '../data/content';
import ThemeToggle from './ThemeToggle';

const EmailIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Sidebar({ activeSection }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          {personalInfo.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-600 dark:text-slate-300 sm:text-xl">
          {personalInfo.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-600 dark:text-slate-400">
          {personalInfo.bio}
        </p>
        <nav className="mt-8 hidden lg:block" aria-label="主导航">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`group flex items-center py-3 transition-all ${
                    activeSection === item.id
                      ? 'text-slate-900 dark:text-slate-100'
                      : 'text-slate-500 dark:text-slate-500'
                  }`}
                >
                  <span
                    className={`mr-4 h-px transition-all duration-300 ${
                      activeSection === item.id
                        ? 'w-16 bg-slate-900 dark:bg-slate-100'
                        : 'w-8 bg-slate-400 dark:bg-slate-600 group-hover:w-16 group-hover:bg-slate-700 dark:group-hover:bg-slate-300'
                    }`}
                  />
                  <span className="text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-slate-900 dark:group-hover:text-slate-100">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 flex items-center gap-5 lg:mt-0">
        <a href={`mailto:${personalInfo.email}`} className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100" aria-label="邮箱"><EmailIcon /></a>
        <a href="苗露-个人简历.pdf" download className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100" aria-label="下载简历"><DownloadIcon /></a>
        <div className="ml-2"><ThemeToggle /></div>
      </div>
    </header>
  );
}
