import { personalInfo, stats } from '../data/content';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading title="关于我">
        <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">{personalInfo.bio}</p>
        <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400">拥有中国卫生心理协会心理咨询师、中医心理师等多项专业资质，是世中联中医心理专委会理事、中国民间中医医药研究开发协会中医心理分会理事、中国睡眠研究院会员。</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg border border-white/60 bg-white/60 p-4 shadow-sm backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/40 dark:shadow-none">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.number}</div>
              <div className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionHeading>
    </section>
  );
}
