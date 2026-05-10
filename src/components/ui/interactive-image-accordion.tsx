import React, { useState } from 'react';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Website Development',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },
  {
    id: 3,
    title: 'Student Project Development',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    id: 4,
    title: 'Full Stack Applications',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  },
  {
    id: 5,
    title: 'Digital Business Solutions',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
  },
];

interface AccordionItemProps {
  key?: number;
  item: typeof accordionItems[0];
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out group will-change-[width]
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'}`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; 
        }}
      />
      
      {/* Dynamic Gradient Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isActive 
          ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100' 
          : 'bg-black/40 opacity-100'
      }`}></div>

      <span
        className={`
          absolute text-white font-semibold whitespace-nowrap
          transition-all duration-500 ease-in-out
          ${
            isActive
              ? 'bottom-8 left-8 text-2xl rotate-0 opacity-100'
              : 'bottom-24 left-1/2 -translate-x-1/2 rotate-90 text-lg opacity-70'
          }
        `}
      >
        {item.title}
      </span>
      
      {/* Subtle "Project" label for active items */}
      {isActive && (
        <span className="absolute top-8 left-8 text-xs font-bold tracking-widest text-white/60 uppercase animate-in fade-in slide-in-from-left-4 duration-700">
          Featured Project
        </span>
      )}
    </div>
  );
};


// --- Main Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-slate-50 font-sans border-y border-slate-200/60">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-indigo-50 border border-indigo-100 rounded-full">
              <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 uppercase">Selected Works</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Engineering <br />
              <span className="text-indigo-600">Digital Excellence</span>
            </h1>
            <p className="mt-8 text-lg text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-normal">
              A curated collection of high-performance applications and websites. We focus on clean architecture, scalability, and exceptional user experience.
            </p>
            <div className="mt-10">
              <a
                href="#portfolio"
                className="inline-block bg-slate-900 text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                Explore Full Archive
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4 no-scrollbar">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
