import { useEffect, useRef, useState, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>, rootMargin: string = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only toggle to true, never back to false (once visible, stays visible)
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      {
        rootMargin,
        threshold: 0.1
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}
