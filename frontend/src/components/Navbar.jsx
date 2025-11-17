import { Menu, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-fuchsia-600 shadow-lg shadow-purple-500/30" />
          <div className="text-white text-lg font-semibold tracking-tight">Jomi Boost</div>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-white/5 text-purple-300 border border-purple-500/30">Car Merch</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Search" className="p-2 rounded-md hover:bg-white/5 text-white/80 hover:text-white transition-colors">
            <Search size={18} />
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-medium shadow-lg shadow-purple-600/30">
            <ShoppingCart size={16} />
            Cart
          </button>
          <button className="md:hidden p-2 rounded-md hover:bg-white/5 text-white/80 hover:text-white transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
