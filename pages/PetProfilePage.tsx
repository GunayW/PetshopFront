
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PetProfilePage: React.FC = () => {
  const { id } = useParams();

  return (
    <main className="p-4 lg:p-12 space-y-12">
      <nav className="flex items-center gap-2 text-sm font-bold text-slate-400">
        <Link to="/discovery" className="hover:text-primary transition-colors">Discovery</Link>
        <span className="material-icons text-xs">chevron_right</span>
        <span className="text-primary font-black uppercase tracking-widest text-[10px]">{id}'s Profile</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative group aspect-square rounded-4xl overflow-hidden bg-slate-200 shadow-2xl shadow-primary/5 border-4 border-white">
            <img src="https://picsum.photos/seed/cooper-main/1000/1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Cooper"/>
            <div className="absolute top-6 left-6 flex flex-col gap-3">
              <span className="px-5 py-2 bg-white/90 backdrop-blur-md text-primary font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg">Featured</span>
              <span className="px-5 py-2 bg-secondary/90 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg">Ready to Adopt</span>
            </div>
            <button className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl hover:scale-110 transition-all">
              <span className="material-icons text-3xl">zoom_in</span>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4 lg:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`aspect-square rounded-3xl overflow-hidden border-4 transition-all cursor-pointer shadow-sm ${i === 1 ? 'border-primary' : 'border-transparent hover:border-primary/30'}`}>
                <img src={`https://picsum.photos/seed/cooper-${i}/400/400`} className="w-full h-full object-cover" alt="thumb"/>
                {i === 4 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-black text-2xl">+12</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-5 flex flex-col space-y-10">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-5xl font-black text-slate-900 tracking-tight">Cooper</h1>
                  <span className="material-icons text-secondary text-3xl">verified</span>
                </div>
                <p className="text-xl text-slate-500 font-bold flex items-center gap-2">
                  Golden Retriever Mix <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span> 2 Years Old
                </p>
              </div>
              <button className="w-14 h-14 rounded-3xl bg-white shadow-xl border border-slate-50 flex items-center justify-center text-slate-300 hover:text-primary transition-all active:scale-95">
                <span className="material-icons text-3xl">favorite_border</span>
              </button>
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-bold">
              <span className="material-icons text-primary/60">location_on</span>
              <span className="text-sm">Sunnybrook Rescue, Seattle</span>
              <a href="#" className="text-xs text-primary underline underline-offset-4 decoration-2 font-black ml-2 uppercase tracking-widest">View Map</a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Status', val: 'Vaccinated', icon: 'vaccines' },
              { label: 'Surgery', val: 'Neutered', icon: 'content_cut' },
              { label: 'Identity', val: 'Chipped', icon: 'memory' }
            ].map((stat) => (
              <div key={stat.label} className="bg-secondary/10 border-2 border-secondary/20 p-5 rounded-3xl flex flex-col items-center text-center group hover:bg-secondary/20 transition-all">
                <span className="material-icons text-secondary mb-3 text-3xl">{stat.icon}</span>
                <span className="text-[9px] uppercase tracking-widest font-black text-secondary/70 mb-1">{stat.label}</span>
                <span className="text-sm font-black text-slate-800">{stat.val}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
              <span className="material-icons text-primary">psychology</span> Temperament
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Good with Cats', 'Family Friendly', 'High Energy', 'House Trained', 'Apartment Living'].map((tag, i) => (
                <span key={tag} className={`px-5 py-3 rounded-full text-xs font-black tracking-wide uppercase ${
                  i === 0 ? 'bg-primary/10 text-primary' : 
                  i === 1 ? 'bg-blue-100 text-blue-600' : 
                  i === 2 ? 'bg-amber-100 text-amber-600' : 
                  i === 3 ? 'bg-emerald-100 text-emerald-600' : 'bg-purple-100 text-purple-600'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
              <span className="material-icons text-primary">auto_awesome</span> About Me
            </h3>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                Hello! I'm Cooper, the world's most professional snuggler. I spent my early days exploring the Pacific Northwest, and now I'm looking for a forever co-pilot for my weekend adventures.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                I'm a fast learner—I've already mastered "sit," "stay," and "give paw" (especially if there are treats involved). 
              </p>
              <button className="text-primary font-black text-sm uppercase tracking-widest hover:underline flex items-center gap-2 decoration-2">
                Read More <span className="material-icons text-sm">keyboard_arrow_down</span>
              </button>
            </div>
          </div>

          <div className="p-8 bg-white rounded-4xl border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center gap-6 group hover:border-primary/20 transition-all cursor-pointer">
            <div className="w-20 h-20 rounded-3xl bg-slate-50 overflow-hidden flex-shrink-0 border-2 border-slate-100">
              <img src="https://picsum.photos/seed/shelter/200/200" className="w-full h-full object-cover" alt="shelter"/>
            </div>
            <div className="flex-grow">
              <h4 className="font-black text-xl text-slate-900">Sunnybrook Rescue</h4>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-icons text-sm">star</span>)}
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">4.8 (124 reviews)</span>
              </div>
            </div>
            <span className="material-icons text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <button className="flex-1 group relative overflow-hidden bg-primary text-white py-6 px-10 rounded-3xl font-black text-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-4">
              <span className="material-icons text-3xl">favorite</span>
              <span>Match with Cooper</span>
            </button>
            <button className="flex-1 bg-secondary text-white py-6 px-10 rounded-3xl font-black text-2xl shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-4">
              <span className="material-icons text-3xl">forum</span>
              <span>Message Shelter</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PetProfilePage;
