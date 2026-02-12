
import React from 'react';
import { Link } from 'react-router-dom';

const ShopListingPage: React.FC = () => {
  const products = [
    { id: '1', name: 'Organic Hemp Dog Rope', price: 24.99, rating: 4.8, reviews: 128, image: 'https://picsum.photos/seed/rope/400/400', badge: 'Eco-Friendly' },
    { id: '2', name: 'Smart Treat Dispenser', price: 149.0, rating: 5.0, reviews: 245, image: 'https://picsum.photos/seed/smart/400/400', badge: 'Best Seller' },
    { id: '3', name: 'Grain-Free Kibble', price: 65.5, rating: 4.2, reviews: 89, image: 'https://picsum.photos/seed/kibble/400/400' },
    { id: '4', name: 'Active Safety Harness', price: 38.0, rating: 5.0, reviews: 52, image: 'https://picsum.photos/seed/harness/400/400' },
    { id: '5', name: 'Cloud Velvet Pet Bed', price: 79.99, oldPrice: 99.99, rating: 4.5, reviews: 210, image: 'https://picsum.photos/seed/bed/400/400', badge: '-20% Off' },
    { id: '6', name: 'Flowing Water Fountain', price: 42.5, rating: 4.4, reviews: 44, image: 'https://picsum.photos/seed/fountain/400/400' },
  ];

  return (
    <div className="p-4 lg:p-8 flex flex-col lg:flex-row gap-10">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-72 space-y-10 flex-shrink-0">
        <div className="bg-gradient-to-br from-primary to-orange-400 rounded-4xl p-8 text-white relative overflow-hidden group shadow-xl shadow-primary/20">
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2">Exclusive Feature</p>
            <h4 className="text-2xl font-extrabold leading-tight mb-6">Find your soul pet today!</h4>
            <Link to="/discovery" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-2xl text-sm font-bold shadow-lg group-hover:scale-105 transition-transform">
              <span>Start Swiping</span>
              <span className="material-icons text-sm">favorite</span>
            </Link>
          </div>
          <span className="material-icons absolute -bottom-8 -right-8 text-[160px] opacity-10 rotate-12">pets</span>
        </div>

        <div className="space-y-8">
          <div>
            <h5 className="font-extrabold text-slate-900 mb-6 flex items-center justify-between text-lg">
              Animal Type
              <span className="material-icons text-slate-400">keyboard_arrow_up</span>
            </h5>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Dogs', icon: 'pets', active: true },
                { name: 'Cats', icon: 'auto_awesome' },
                { name: 'Birds', icon: 'egg' },
                { name: 'Small Pets', icon: 'bug_report' }
              ].map((type) => (
                <button 
                  key={type.name} 
                  className={`flex flex-col items-center justify-center p-5 rounded-3xl border transition-all ${
                    type.active 
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                      : 'bg-white border-slate-100 text-slate-400 hover:border-primary/50'
                  }`}
                >
                  <span className="material-icons mb-2">{type.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{type.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-extrabold text-slate-900 mb-6 text-lg">Price Range</h5>
            <div className="px-2">
              <div className="h-2 bg-slate-100 rounded-full relative">
                <div className="absolute inset-y-0 left-[10%] right-[30%] bg-primary rounded-full"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-5 h-5 bg-white border-4 border-primary rounded-full shadow-md cursor-pointer"></div>
                <div className="absolute top-1/2 -translate-y-1/2 right-[30%] w-5 h-5 bg-white border-4 border-primary rounded-full shadow-md cursor-pointer"></div>
              </div>
              <div className="flex justify-between mt-4 text-xs font-extrabold text-slate-500 uppercase tracking-widest">
                <span>$0</span>
                <span>$250+</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-extrabold text-slate-900 mb-6 text-lg">Popular Brands</h5>
            <div className="space-y-4">
              {["Nature's Best", "Pawsome Treats", "Royal Kingdom", "EcoPet"].map((brand, i) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" defaultChecked={i === 0} className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"/>
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-primary transition-colors">{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Grid Section */}
      <section className="flex-1 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-6 lg:p-10 rounded-4xl border border-primary/5 shadow-sm">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Dog Supplies</h2>
            <p className="text-slate-400 text-sm font-medium">Showing 1-12 of 84 products</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
              <span className="material-icons text-primary text-xl">sort</span>
              <span>Sort:</span>
              <select className="bg-transparent border-none focus:ring-0 text-primary font-extrabold cursor-pointer">
                <option>Newest Arrivals</option>
                <option>Price: Low-High</option>
                <option>Highest Rated</option>
              </select>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-100"></div>
            <div className="flex gap-2">
              <button className="p-3 bg-primary/10 text-primary rounded-xl shadow-sm">
                <span className="material-icons">grid_view</span>
              </button>
              <button className="p-3 text-slate-300 hover:text-primary transition-colors">
                <span className="material-icons">view_list</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {products.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="bg-white rounded-4xl p-6 group shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all border-2 border-transparent hover:border-primary/5">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-50 mb-8">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={p.name}
                />
                <button className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-300 hover:text-primary transition-colors shadow-sm">
                  <span className="material-icons">favorite_border</span>
                </button>
                {p.badge && (
                  <div className={`absolute bottom-4 left-4 ${p.badge.includes('Off') ? 'bg-red-500' : 'bg-secondary'} text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg`}>
                    {p.badge}
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`material-icons text-sm ${i < Math.floor(p.rating) ? 'text-orange-400' : 'text-slate-200'}`}>star</span>
                  ))}
                  <span className="text-[11px] text-slate-400 font-bold ml-1">({p.reviews})</span>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{p.name}</h3>
                  <p className="text-slate-400 text-sm font-medium mt-1">High-quality essential for your best friend</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-900">${p.price}</span>
                    {p.oldPrice && <span className="text-sm text-slate-400 line-through font-bold">${p.oldPrice}</span>}
                  </div>
                  <button className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center hover:bg-slate-900 shadow-lg shadow-primary/20 transition-all active:scale-95">
                    <span className="material-icons">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopListingPage;
