import { testimonials } from '../data/content';
import SectionHeading from './SectionHeading';

const QuoteIcon = () => (
  <svg className="h-6 w-6 shrink-0 text-primary-500/30 dark:text-primary-400/30" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.3 2.6c-.3-.4-.8-.6-1.3-.6H6C4.9 2 4 2.9 4 4v4c0 1.1.9 2 2 2h2v2c0 1.1-.9 2-2 2H5c-.6 0-1 .4-1 1s.4 1 1 1h1c2.2 0 4-1.8 4-4V8c0-.5-.2-1-.6-1.4L11.3 2.6zM21.3 2.6c-.3-.4-.8-.6-1.3-.6H16c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2v2c0 1.1-.9 2-2 2h-1c-.6 0-1 .4-1 1s.4 1 1 1h1c2.2 0 4-1.8 4-4V8c0-.5-.2-1-.6-1.4L21.3 2.6z"/>
  </svg>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading title="同事评价">
        {/* 横排：桌面端 flex 水平排列，移动端纵向堆叠 */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-1 rounded-lg border border-white/60 bg-white/60 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/40 dark:shadow-none"
            >
              <QuoteIcon />
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {testimonial.text}
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-slate-100/60 pt-3 dark:border-slate-700/60">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-xs font-bold text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
                  {testimonial.avatar}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-900 dark:text-slate-100">
                    {testimonial.author}
                  </div>
                  <div className="truncate text-xs text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionHeading>
    </section>
  );
}
