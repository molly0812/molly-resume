export default function SectionHeading({ title, children }) {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen border-b border-white/40 bg-white/70 px-6 py-5 shadow-sm backdrop-blur-lg dark:border-slate-700/40 dark:bg-slate-900/70 dark:shadow-none lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">{title}</h2>
      </div>
      <h2 className="mb-8 hidden text-2xl font-bold text-slate-900 dark:text-slate-100 lg:block">{title}</h2>
      {children}
    </>
  );
}
