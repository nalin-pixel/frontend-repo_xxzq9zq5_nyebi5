import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <footer id="about" className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="text-white font-semibold">Jomi Boost</div>
            <p className="text-white/60 mt-2">Futuristic car merch forged in a dark, sleek aesthetic.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Support</div>
            <ul className="mt-2 space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">Shipping & returns</a></li>
              <li><a href="#" className="hover:text-white">Care guide</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div id="contact">
            <div className="text-white font-semibold">Stay in the loop</div>
            <p className="text-white/60 mt-2">Join the night drive. Get early access to drops.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="you@domain.com" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600" />
              <button className="rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2 text-sm font-medium">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-center text-white/50 text-xs">© {new Date().getFullYear()} Jomi Boost. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
