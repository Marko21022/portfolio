// components/StartClient.tsx
'use client';

import { motion } from 'motion/react';
import { UserData } from './Api';

type Props = {
  user: UserData;
};

export default function StartClient({ user }: Props) {
  const words = [
    { text: 'Hi,', bold: false },
    { text: "I'm", bold: false },
    { text: user.displayName, bold: true },
  ];

  const statusColors: Record<UserData['status'], string> = {
    online: '#3ba55d',
    idle: '#faa61a',
    dnd: '#f04747',
    offline: '#747f8d',
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
      {/* Avatar + Status */}
      <motion.div
        className="relative w-32 h-32 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <img
          src={user.avatar}
          alt={user.displayName}
          className="w-32 h-32 rounded-full"
        />
        <span
          className="absolute bottom-0 right-2 w-9 h-9 rounded-full right-[-2]"
          style={{ backgroundColor: statusColors[user.status] }}
        />
      </motion.div>

      {/* Greeting */}
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
        {words.map((word, i) => (
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
              className={word.bold ? 'font-bold' : ''}
              initial={{ color: '#ffffff' }}
              animate={{ color: ['#64d1ffff', '#ffffff'] }}
              transition={{
                delay: 0.5 + i * 0.15,
                duration: 2,
                ease: 'easeInOut',
              }}
            >
              {word.text}
            </motion.span>
          </motion.span>
        ))}
      </h1>

      {/* Social Links */}
      <div className="flex gap-5 text-slate-300 mt-8">
        <a href="https://github.com/Marko21022" className="hover:text-white transition">
          GitHub
        </a>
        <a href="https://discord.com/users/1143806923754438777" className="hover:text-white transition">
          Discord
        </a>
        <a href="https://www.roblox.com/users/4837985866/profile" className="hover:text-white transition">
          Roblox
        </a>
      </div>
    </div>
  );
}
