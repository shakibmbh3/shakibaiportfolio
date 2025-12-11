import React, { useRef } from 'react';
import { useOnScreen } from './IntersectionObserverHook';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "", delay = "0" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-32 ${className}`}
    >
      <div 
        className={`fade-up ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;