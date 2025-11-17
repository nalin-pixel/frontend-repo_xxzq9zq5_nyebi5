import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Velocity Tee', price: 38, img: 'https://images.unsplash.com/photo-1592878904946-b3cd3f3b2d9b?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Night Runner Cap', price: 28, img: 'https://images.unsplash.com/photo-1620799139505-1b0e68d58b18?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Aero Decal Kit', price: 18, img: 'https://images.unsplash.com/photo-1574931295709-9badd9f846b2?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Boost Hoodie', price: 68, img: 'https://images.unsplash.com/photo-1618354691521-6bd1d3f3f83c?q=80&w=1200&auto=format&fit=crop' }
];

export default function Products() {
  return (
    <section id="products" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Featured merch</h2>
            <p className="text-white/70 text-sm mt-2">Curated drops inspired by motion and precision.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-purple-300 hover:text-white transition">View all</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <div className="text-white font-medium">{p.name}</div>
                <div className="text-white/70 text-sm mt-1">${p.price.toFixed(2)}</div>
                <button className="mt-4 w-full rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white py-2 text-sm font-medium shadow-lg shadow-purple-600/30">Add to cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
