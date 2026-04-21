import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const siteId = 'molly-resume';
    fetch(`https://api.countapi.xyz/hit/${siteId}/visits`)
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => {
        const localCount = parseInt(localStorage.getItem('visitorCount') || '0', 10) + 1;
        localStorage.setItem('visitorCount', localCount.toString());
        setCount(localCount);
      });
  }, []);

  if (!count) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 text-xs text-slate-400/40 dark:text-slate-500/40 select-none pointer-events-none">
      你是第 {count.toLocaleString()} 位访客
    </div>
  );
}
