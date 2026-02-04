'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const FlowerScene = dynamic(() => import('@/components/FlowerScene'), {
  ssr: false,
  loading: () => null,
})

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Flower animation - positioned to the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-60">
        <FlowerScene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          {/* Logo */}
          <div className="relative w-40 h-40 mb-8">
            <Image
              src="/images/logos/258F7629-18AD-40F0-B764-96EA84C4EC8F.png"
              alt="King Made"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-[#E8DCC4]">Hardware</span>
            <br />
            <span className="text-[#F5F5F5]/60">meets </span>
            <span className="text-[#E8DCC4]">Software</span>
          </h1>

          <p className="text-lg text-[#F5F5F5]/50 max-w-md mb-10">
            Building consumer electronics with software experiences that feel natural.
          </p>

          {/* CTA */}
          <a
            href="#work"
            className="px-8 py-3 bg-[#E8DCC4] text-[#0A0A0A] font-semibold rounded-full hover:bg-[#C4A574] transition-colors"
          >
            See Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#E8DCC4]/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#E8DCC4]/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
