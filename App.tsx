import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Modal from './components/Modal';
import { HERO_DATA, SERVICES, TECH_STACK, PROCESS_STEPS, CASE_STUDIES } from './constants';
import { CaseStudy } from './types';
import { 
  ArrowRight, 
  Mic, 
  Workflow, 
  ShoppingBag, 
  Users, 
  Search, 
  Cpu,
  Linkedin,
  Mail,
  ChevronRight
} from 'lucide-react';

// Icon Map helper
const IconMap: Record<string, React.ElementType> = {
  Mic, Workflow, ShoppingBag, Users, Search
};

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-8 animate-[fadeIn_1s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-8 leading-[1.1]">
            I turn operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">chaos</span> into scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">systems</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
            {HERO_DATA.intro}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#work" 
              onClick={(e) => handleScroll(e, '#work')}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              View Case Studies <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-white rounded-full font-semibold transition-all hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="services" className="border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">The Problem I Solve</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Your team is drowning in repetitive work. I build systems that eliminate bottlenecks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = IconMap[service.iconName];
            return (
              <div key={service.id} className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="work">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Selected Work</h2>
            <p className="text-slate-400 max-w-xl">
              Real systems. Measurable ROI. Not just flashy demos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setSelectedCaseStudy(study)}
              className="text-left group relative bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-8 transition-all hover:bg-slate-800/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="bg-emerald-500/10 p-2 rounded-full">
                    <ArrowRight className="text-emerald-400" size={20} />
                 </div>
              </div>
              
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                {study.emoji}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {study.title}
              </h3>
              
              {/* Preview challenge - truncated */}
              <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                {study.challenge}
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-medium px-2 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  {study.results[0].split(':')[0]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Process */}
      <div className="bg-slate-900/30 border-y border-slate-800/30">
        <Section id="process">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">My Process</h2>
              <p className="text-slate-400">Simple beats clever. ROI is the only metric that matters.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={step.id} className="relative p-6 pt-12 rounded-xl border border-slate-800 bg-slate-950/50 hover:border-emerald-500/30 transition-colors group text-center flex flex-col items-center">
                  <div className="text-6xl font-display font-bold text-slate-800/60 absolute top-2 right-4 group-hover:text-emerald-900/40 transition-colors select-none z-0">
                    {step.id}
                  </div>
                  <div className="relative z-10 mt-2">
                    <h3 className="text-lg font-bold text-emerald-400 mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Tech Stack */}
      <Section id="tech">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-800">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-display font-bold text-white mb-4">My Tech Stack</h2>
              <p className="text-slate-400 mb-6">
                I don't just use tools; I orchestrate them into cohesive systems.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Cpu size={16} />
                <span>System Design Focus</span>
              </div>
            </div>
            
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              {TECH_STACK.map((category) => (
                <div key={category.category}>
                  <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-4 border-b border-slate-800 pb-2">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.tools.map((tool) => (
                      <li key={tool} className="text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact / CTA */}
      <Section id="contact">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900 to-slate-900 border border-emerald-500/20 p-8 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to scale without the chaos?
            </h2>
            <p className="text-emerald-100/80 text-lg mb-10">
              I'm looking for projects where automation creates real operational leverage. 
              Voice AI, Internal Tools, and Revenue Operations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="mailto:shakibmbh3@gmail.com"
                className="flex items-center gap-3 bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a 
                href="https://linkedin.com/in/shakibmbh" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 bg-emerald-900/50 border border-emerald-500/50 text-white hover:bg-emerald-800/50 px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-1"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-emerald-500/20 flex flex-wrap justify-center gap-4 text-sm text-emerald-200/60 font-medium">
              <span>Voice AI</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/40 self-center"></span>
              <span>Process Automation</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/40 self-center"></span>
              <span>E-commerce</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/40 self-center"></span>
              <span>Lead Gen</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <div className="flex justify-center items-center gap-1 mb-2">
          <span className="font-display font-bold text-slate-500">SHAKIB</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
        </div>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>

      {/* Case Study Modal */}
      <Modal 
        isOpen={!!selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
        caseStudy={selectedCaseStudy} 
      />
    </div>
  );
}