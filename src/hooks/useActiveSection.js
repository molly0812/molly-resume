import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      observer.observe(element);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeSection;
}
