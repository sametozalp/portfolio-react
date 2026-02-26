import { useEffect, useRef } from 'react';

// animasyonu tetikler
export const useIntersectionObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      threshold: 0.3,
      rootMargin: '0px',
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add active-section class for animations
          entry.target.classList.add('active-section');
        }
      });
    }, options);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return observerRef.current;
};
