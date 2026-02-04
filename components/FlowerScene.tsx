'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo } from 'react'

export default function FlowerScene() {
  // Generate stable particle positions
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: 20 + (i * 2) % 60,
      top: 20 + (i * 3) % 60,
      duration: 6 + (i % 5) * 2,
      delay: (i % 8) * 0.8,
    }))
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Animated flower - slow gentle breathing */}
      <motion.div
        className="relative"
        style={{ width: '70vmin', height: '70vmin', maxWidth: '700px', maxHeight: '700px' }}
        animate={{
          scale: [1, 1.015, 1, 0.985, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Slow rotation wrapper */}
        <motion.div
          className="relative w-full h-full"
          animate={{
            rotate: [0, 0.5, 0, -0.5, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/images/flowers/IMG_2635.JPG"
            alt="Sunflower"
            fill
            className="object-contain"
            priority
            quality={100}
          />
        </motion.div>

        {/* Subtle pulsing glow overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle, rgba(232,220,196,0.08) 0%, transparent 60%)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Floating particles - slow and subtle */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: '3px',
            height: '3px',
            backgroundColor: '#E8DCC4',
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, 10, 0, -10, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
