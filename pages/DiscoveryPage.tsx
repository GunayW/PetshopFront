
import React from 'react';
import { Link } from 'react-router-dom';

const DiscoveryPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-bg-light">
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative">
        {/* Card Stack Container */}
        <div className="relative w-full max-w-lg aspect-[3/4] group">
          {/* Background cards for stack effect */}
          <div className="absolute inset-0 bg-white scale-95 translate-y-6 rounded-4xl -z-10 blur-[1px] opacity-40"></div>
          <div className="absolute inset-0 bg-white scale-90 translate-y-12 rounded-4xl -z-20 blur-[2px] opacity-20"></div>
          
          {/* Main Pet Card */}
          <div className="w-full h-full relative overflow-hidden rounded-4xl shadow-2xl bg-white border-4 border-white">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAky5x-FYIMNkYakiL0awgrM8xTWC0NfYLLoozos1OqTQ2A7D2TezdkZFHTzYFKlYvgNgCx7cjCLQlZyhG_NZ4HbFWOAJkME5OGwDlw8lqWi6n6fx68rQK82CNRtWMJ9vR_cS94iAi7mEFolj7YBxdwyvE8LpRRi_Vm1qZK9ldvIkaqqMhGHzPLrZEB9c-WOd_1A9UC_nR4fb8BVIzEddB4gN47Sjtj9QB_HPV4mRV7meMsQeHGtDl-cR2Lm_ms3LyTn7f8nnL3_eiS" 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Luna"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            
            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-end gap-3 mb-2">
                <h2 className="text-4xl font-extrabold">Luna</h2>
                <span className="text-2xl font-light opacity-80 mb-1">2 yrs</span>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-1 text-sm bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <span className="material-icons text-sm">location_on</span>
                  <span>Los Angeles (5mi)</span>
                </div>
                <div className="flex items-center gap-1 text-sm bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <span className="material-icons text-sm">bolt</span>
                  <span>Active</span>
                </div>
              </div>
              <p className="mt-4 text-slate-200 line-clamp-2 text-sm leading-relaxed">
                An energetic bundle of joy looking for someone who loves morning runs and weekend hiking adventures. I'm very friendly and love belly rubs!
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center gap-6">
            <button className="w-14 h-14 bg-white text-secondary rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border border-slate-100">
              <span className="material-icons">undo</span>
            </button>
            <button className="w-20 h-20 bg-primary text-white rounded-full shadow-xl shadow-primary/40 hover:scale-110 transition-transform flex items-center justify-center">
              <span className="material-icons text-4xl">favorite</span>
            </button>
            <button className="w-14 h-14 bg-white text-orange-400 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border border-slate-100">
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>

        {/* Quick Link */}
        <div className="mt-24 flex items-center gap-3 bg-white/60 backdrop-blur px-6 py-4 rounded-2xl border border-primary/10 shadow-sm">
          <span className="material-icons text-primary">shopping_cart</span>
          <span className="text-sm font-medium text-slate-600">Looking for toys for <strong>Luna</strong>?</span>
          <Link to="/shop" className="text-sm font-bold text-primary underline underline-offset-4 decoration-primary/30">Browse Shop</Link>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-white border-l border-primary/10 p-6 hidden xl:block overflow-y-auto">
        <div className="text-center mb-10">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <img 
              src="https://picsum.photos/seed/alex/200/200" 
              className="w-full h-full rounded-full object-cover border-4 border-primary/10" 
              alt="Profile"
            />
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-white">
              <span className="material-icons text-[14px] text-white">settings</span>
            </div>
          </div>
          <h3 className="font-extrabold text-lg text-slate-900">Alex Johnson</h3>
          <p className="text-slate-400 text-sm italic">"Looking for a hiking buddy"</p>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Discovery Filter</h4>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wide">
                  <span>Max Distance</span>
                  <span className="text-primary">25 mi</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[40%]"></div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-bold rounded-full cursor-pointer">Dogs</span>
                <span className="px-4 py-1.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">Cats</span>
                <span className="px-4 py-1.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">Exotic</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Discovery History</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://picsum.photos/seed/pug/150/150",
                "https://picsum.photos/seed/ginger/150/150",
                "https://picsum.photos/seed/shades/150/150"
              ].map((src, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm">
                  <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="history"/>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-icons text-white">favorite</span>
                  </div>
                </div>
              ))}
              <div className="aspect-square bg-slate-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-slate-200 text-slate-300">
                <span className="material-icons">history</span>
                <span className="text-[10px] font-bold mt-1">SEE ALL</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary/5 border border-secondary/20 p-5 rounded-3xl">
            <div className="flex items-center gap-2 mb-2 text-secondary">
              <span className="material-icons-outlined text-sm">verified</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Pro Tip</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
              Verified pets are 80% more likely to find a perfect match. Get your pet verified today!
            </p>
          </div>
        </div>
      </aside>

      {/* Floating Match Badge */}
      <div className="fixed top-8 right-8 z-50 animate-bounce">
        <div className="bg-primary text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2">
          <span className="material-icons text-sm">local_fire_department</span>
          <span className="text-xs font-bold uppercase tracking-widest">3 new matches!</span>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPage;
