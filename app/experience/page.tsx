'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Background } from '@/components/Bg';

type Experience = {
  name: string;
  from: string;
  to: string;
  rank: string;
  members: number;
  description: string;
};

const experiences: Experience[] = [
  {
    name: 'Washington State Roleplay',
    from: 'AUGUST 2024',
    to: 'JUNE 2025',
    rank: 'Deputy Founder',
    members: 8500,
    description:
      'Managed all operaions inside of the Discord Server.',
  },
  {
    name: 'Florida State Roleplay',
    from: 'AUGUST 2025',
    to: 'PRESENT',
    rank: 'Designer',
    members: 10000,
    description:
      'Designing banners and promotional material for the community.',
  },
  {
    name: 'Alaska State Roleplay',
    from: 'NOVEMBER 2025',
    to: 'DECEMBER 2025',
    rank: 'Senior Management',
    members: 1300,
    description:
      'Oversaw Staff ingame and helped with moderating.',
  },
  {
    name: 'Federate',
    from: 'AUGUST 2025',
    to: 'PRESENT',
    rank: 'Designer',
    members: 4200,
    description:
      'Designing scorecards for users.',
  },
];

export default function ExperiencePage() {
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <div className="relative min-h-screen px-6 text-white overflow-x-hidden">
      <Background interactive />

      <div className="relative z-10">
        <div className="h-32" />

       <motion.h1 className="text-5xl font-medium mb-8 z-10 relative text-center">
         {"My Experience".split(" ").map((word, i) => (
           <motion.span
             key={i}
             className="inline-block mr-2"
             initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
             animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
             transition={{
               delay: i * 0.15,
               duration: 0.5,
               ease: 'easeOut',
             }}
           >
             <motion.span
               className={word === "Experience" ? 'font-bold' : ''}
               initial={{ color: '#ffffff' }}
               animate={{ color: ['#64d1ffff', '#ffffff'] }}
               transition={{
                 delay: 0.5 + i * 0.15,
                 duration: 2,
                 ease: 'easeInOut',
               }}
             >
               {word}
             </motion.span>
           </motion.span>
         ))}
       </motion.h1>

      {/* Experience List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {experiences.map((exp) => (
          <button
            key={exp.name}
            onClick={() => setActive(exp)}
            className="
              w-full text-left rounded-xl p-6
              bg-white/[0.03]
              border border-white/10
              hover:border-white/20
              transition
              group
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-medium group-hover:text-white">
                  {exp.name}
                </h2>
                <p className="text-sm text-white/50 mt-1">
                  {exp.from} — {exp.to}
                </p>
              </div>
              <span className="text-sm text-white/60">{exp.rank}</span>
            </div>
          </button>
        ))}
      </div>
      </div>

      {/* Side Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="
                absolute right-0 top-0 h-full w-full max-w-md
                bg-neutral-950
                border-l border-white/10
                p-8
              "
            >
              <button
                onClick={() => setActive(null)}
                className="text-white/50 hover:text-white mb-8"
              >
                ← Back
              </button>

              <h2 className="text-3xl font-semibold mb-2">{active.name}</h2>
              <p className="text-sm text-white/50 mb-6">
                {active.from} — {active.to}
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                {active.description}
              </p>

              <div className="flex justify-between text-sm text-white/70">
                <span>
                  <b>Rank:</b> {active.rank}
                </span>
                <span>
                  <b>Members:</b> {active.members}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}