
import React from 'react';
import { Link } from 'react-router-dom';

const ShopPage: React.FC = () => {
  const categories = [
    { name: 'Food', icon: 'restaurant', color: 'orange' },
    { name: 'Toys', icon: 'sports_tennis', color: 'teal' },
    { name: 'Healthcare', icon: 'healing', color: 'blue' },
    { name: 'Grooming', icon: 'content_cut', color: 'purple' },
    { name: 'Bedding', icon: 'hotel', color: 'green' },
    { name: 'Accessories', icon: 'loyalty', color: 'yellow' },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-12">
      {/* Header Bar */}
      <header className="flex justify-between items-center">
        <div className="relative w-full max-w-md hidden md:block">
          <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            type="text" 
            placeholder="Search for food, toys, treats..." 
            className="w-full bg-white border-none rounded-full py-3.5 pl-12 pr-6 focus:ring-2 focus:ring-primary shadow-sm font-medium"
          />
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <button className="p-3 bg-white rounded-full shadow-sm text-slate-400 relative hover:text-primary transition-all">
            <span className="material-icons-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button className="p-3 bg-white rounded-full shadow-sm text-slate-400 relative hover:text-primary transition-all">
            <span className="material-icons-outlined">shopping_cart</span>
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">3</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-pastel-hero rounded-4xl overflow-hidden relative border border-primary/5 min-h-[400px]">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="p-10 lg:p-16 space-y-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-widest rounded-full">Premium Care</span>
            <h2 className="text-5xl font-extrabold text-slate-900 leading-[1.1]">Premium Care for Your Best Friend.</h2>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Discover high-quality nutrition, toys, and healthcare essentials tailored for your pet's unique personality.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop/listing" className="px-8 py-4 bg-primary text-white font-extrabold rounded-2xl shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all">
                Shop Now
              </Link>
              <button className="px-8 py-4 bg-white text-slate-800 font-extrabold rounded-2xl shadow-md border border-slate-100 hover:bg-slate-50 transition-all">
                View Catalog
              </button>
            </div>
          </div>
          <div className="relative h-full min-h-[400px]">
            <img 
              src="https://picsum.photos/seed/aussie/1200/800" 
              className="w-full h-full object-cover" 
              alt="Happy Aussie"
            />
            <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce">
              <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600">
                <span className="material-icons">star</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Top Rated</p>
                <p className="text-lg font-extrabold text-slate-900">#1 Selection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Scroller */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-extrabold">Shop by Category</h3>
          <Link to="/shop/listing" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
            View All <span className="material-icons text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((cat) => (
            <Link key={cat.name} to="/shop/listing" className="flex-shrink-0 group cursor-pointer text-center space-y-4">
              <div className={`w-28 h-28 rounded-full bg-${cat.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm group-hover:shadow-lg border-2 border-white`}>
                <span className={`material-icons text-4xl text-${cat.color}-600`}>{cat.icon}</span>
              </div>
              <p className="font-bold text-slate-700">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Subscription Teaser */}
      <section className="bg-primary/5 rounded-4xl p-10 lg:p-16 border border-primary/10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h3 className="text-4xl font-extrabold leading-tight">Never run out of kibble again.</h3>
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              Join the PetPulse Auto-Ship club and save 15% on every order. Plus, get a free whimsical toy in your first box!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-5 rounded-2xl border-none bg-white focus:ring-2 focus:ring-primary shadow-sm font-medium"
              />
              <button className="px-10 py-5 bg-primary text-white font-extrabold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-8 rounded-4xl shadow-2xl border border-primary/10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center">
                    <span className="material-icons text-primary text-4xl">redeem</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-2xl">Monthly Box</p>
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wide">Next: Sept 24th</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%] rounded-full"></div>
                  </div>
                  <p className="text-sm font-extrabold text-center text-slate-500 uppercase tracking-widest">Box is 75% packed!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
