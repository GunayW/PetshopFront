
import React from 'react';
import { Link } from 'react-router-dom';

const UserProfilePage: React.FC = () => {
  return (
    <main className="p-4 lg:p-10 space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-5xl font-black tracking-tight">Welcome back, Sarah! 👋</h1>
          <p className="text-slate-500 font-medium text-lg mt-2">You have 3 happy pets and 12 potential new matches waiting.</p>
        </div>
        <button className="bg-primary text-white font-black py-4 px-8 rounded-3xl flex items-center gap-3 shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
          <span className="material-icons">add</span>
          Add New Pet
        </button>
      </header>

      <div className="bg-white rounded-4xl p-8 lg:p-12 shadow-sm border border-primary/5">
        <div className="flex border-b border-slate-50 mb-10 overflow-x-auto hide-scrollbar">
          <button className="px-10 py-5 font-black text-xl text-primary border-b-4 border-primary whitespace-nowrap">My Pets</button>
          <button className="px-10 py-5 font-black text-xl text-slate-300 hover:text-primary transition-colors whitespace-nowrap">Order History</button>
          <button className="px-10 py-5 font-black text-xl text-slate-300 hover:text-primary transition-colors whitespace-nowrap">My Matches</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pet 1 */}
          <Link to="/pet/cooper" className="group bg-bg-light rounded-4xl p-6 border-4 border-transparent hover:border-primary/20 transition-all cursor-pointer shadow-sm">
            <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/3]">
              <img src="https://picsum.photos/seed/beagle/500/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Cooper"/>
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">Beagle</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-black">Cooper</h3>
                <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-wide">3 Years Old • Male</p>
              </div>
              <div className="bg-emerald-50 text-emerald-500 p-3 rounded-2xl flex items-center justify-center">
                <span className="material-icons text-xl">favorite</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Health Pulse</span>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-200"></div>
                <span className="text-xs font-bold text-slate-800">Perfect</span>
              </div>
            </div>
          </Link>

          {/* Pet 2 */}
          <Link to="/pet/midnight" className="group bg-bg-light rounded-4xl p-6 border-4 border-transparent hover:border-primary/20 transition-all cursor-pointer shadow-sm">
            <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/3]">
              <img src="https://picsum.photos/seed/cat/500/500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Midnight"/>
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">Bombay</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-black">Midnight</h3>
                <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-wide">1 Year Old • Female</p>
              </div>
              <div className="bg-emerald-50 text-emerald-500 p-3 rounded-2xl flex items-center justify-center">
                <span className="material-icons text-xl">favorite</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Health Pulse</span>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-200"></div>
                <span className="text-xs font-bold text-slate-800">Active</span>
              </div>
            </div>
          </Link>

          {/* Add Pet */}
          <div className="group border-4 border-dashed border-primary/10 rounded-4xl p-10 flex flex-col items-center justify-center text-center space-y-6 hover:bg-primary/5 hover:border-primary/30 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <span className="material-icons text-primary text-4xl">add</span>
            </div>
            <div>
              <h3 className="text-2xl font-black">Add a New Pal</h3>
              <p className="text-slate-400 font-medium px-4 mt-2 leading-relaxed">Grow your furry family and keep track of their health.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        <section className="bg-white rounded-4xl p-10 shadow-sm border border-primary/5">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black italic tracking-tight">Recent Orders</h2>
            <Link to="/profile" className="text-primary font-black text-sm uppercase tracking-widest hover:underline decoration-2">View All</Link>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Premium Organic Kibble', id: 'PP-90210', date: '24 Oct 2023', price: 54.99, status: 'Shipped', img: 'https://picsum.photos/seed/food/200/200' },
              { name: 'Squeaky Blue Dino Toy', id: 'PP-88241', date: '20 Oct 2023', price: 12.50, status: 'Delivered', img: 'https://picsum.photos/seed/dino/200/200' }
            ].map((order, i) => (
              <div key={i} className="flex items-center gap-6 p-5 rounded-3xl bg-bg-light shadow-sm">
                <img src={order.img} className="w-20 h-20 rounded-2xl object-cover bg-white shadow-sm border border-slate-100" alt="order"/>
                <div className="flex-1">
                  <p className="font-extrabold text-lg text-slate-900 leading-none">{order.name}</p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-3">Order #{order.id} • {order.date}</p>
                </div>
                <div className="text-right space-y-2">
                  <p className="font-black text-xl text-primary tracking-tight">${order.price.toFixed(2)}</p>
                  <span className={`text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-widest ${order.status === 'Shipped' ? 'bg-primary/10 text-primary' : 'bg-emerald-100 text-emerald-600'}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-4xl p-10 shadow-sm border border-primary/5">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black italic tracking-tight">New Matches</h2>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((n) => (
                <img key={n} src={`https://picsum.photos/seed/match-${n}/100/100`} className="w-10 h-10 rounded-full border-4 border-white object-cover shadow-sm" alt="match"/>
              ))}
              <div className="w-10 h-10 rounded-full border-4 border-white bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary">+9</div>
            </div>
          </div>
          <div className="relative overflow-hidden group cursor-pointer rounded-3xl">
            <img src="https://picsum.photos/seed/ginger/800/400" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" alt="match"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <h4 className="text-white font-black text-2xl">Ginger, 2</h4>
                  <p className="text-white/80 font-bold text-sm tracking-wide">3 miles away • Loves naps</p>
                </div>
                <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/40 hover:scale-110 transition-all">
                  <span className="material-icons">chat</span>
                </button>
              </div>
            </div>
          </div>
          <Link to="/discovery" className="block w-full mt-6 py-4 border-2 border-primary/10 rounded-3xl font-black text-primary text-center uppercase tracking-widest hover:bg-primary/5 transition-all">
            Keep Matching
          </Link>
        </section>
      </div>
    </main>
  );
};

export default UserProfilePage;
