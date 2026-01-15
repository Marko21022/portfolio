'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User as Home } from '@/components/animate-ui/icons/user';
import { Paperclip } from '@/components/animate-ui/icons/paperclip';
import { Layers } from '@/components/animate-ui/icons/layers';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Paperclip, label: 'Projects', href: '/projects' },
  { icon: Layers, label: 'Experience', href: '/experience' },
];

export default function Nav() {
  const pathname = usePathname();

  // For smooth scrolling if we want sections instead of pages
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md shadow-md"
    >
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link key={index} href={item.href} className="group">
            <motion.div
              className={`relative w-14 h-14 flex items-center justify-center rounded-full cursor-pointer transition-all
                ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}
                text-slate-200 hover:text-white
              `}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => {
                // Optional: scroll to section if using hash links
                if (item.href.startsWith('#')) {
                  scrollToSection(item.href.slice(1));
                }
              }}
            >
              <AnimateIcon animateOnHover>
                <Icon />
              </AnimateIcon>

              <span className="absolute -top-8 text-xs px-2 py-1 rounded bg-slate-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </motion.div>
          </Link>
        );
      })}
    </motion.nav>
  );
}
