import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.2),transparent),radial-gradient(800px_400px_at_80%_0,rgba(79,70,229,0.18),transparent)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-xs text-purple-300/90 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            New drop live now
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl tracking-tight font-semibold text-white">
            Elevate your drive with Jomi Boost
          </h1>
          <p className="mt-5 text-white/70 text-base sm:text-lg">
            A dark, futuristic car merch experience. Premium pieces inspired by speed, precision and night runs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-600/30 hover:brightness-110 transition">
              Shop featured
            </a>
            <a href="#about" className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
