import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../store/slices/uiSlice';

export const useIntersectionObserver = () => {
  const dispatch = useDispatch();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      threshold: 0.3,
      rootMargin: '0px',
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            dispatch(setActiveSection(id));
            
            // Add active-section class for animations
            entry.target.classList.add('active-section');
          }
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
  }, [dispatch]);

  return observerRef.current;
};
