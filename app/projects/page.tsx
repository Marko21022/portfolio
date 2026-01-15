'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Background } from '@/components/Bg';

export default function ProjectsPage() {
  const [images, setImages] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const imageFiles = Array.from({ length: 13 }, (_, i) => `${i + 1}.png`);
    setImages(imageFiles.map((f) => `/projects/${f}`));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center px-6 text-white overflow-x-hidden">
      <Background interactive={true} />
      <div className="h-28 md:h-32" />
<motion.h1 className="text-5xl font-medium mb-8 z-10 relative text-center">
  {"My Banner Designs".split(" ").map((word, i) => (
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
        className={word === "Designs" ? 'font-bold' : ''}
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


      <div
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 z-10 relative mb-20"
        style={{ columnGap: '1rem' }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="mb-4 break-inside-avoid relative cursor-pointer rounded-lg overflow-hidden w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(src)}
          >
            <Image
              src={src}
              alt={`Project ${i + 1}`}
              width={500}
              height={Math.floor(300 + Math.random() * 300)}
              className="w-full rounded-lg object-cover"
            />
          </motion.div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="relative w-full max-w-[90vw] max-h-[90vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <ImageWrapper src={selected} />
          </motion.div>
        </div>
      )}
    </div>
  );
}

function ImageWrapper({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white animate-pulse">Loading...</span>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt="Selected Project"
          fill
          style={{ objectFit: 'contain' }}
          onLoadingComplete={() => setLoaded(true)}
        />
      </motion.div>
    </div>
  );
}
