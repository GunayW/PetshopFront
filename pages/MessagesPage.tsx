
import React from 'react';

const MessagesPage: React.FC = () => {
  const threads = [
    { name: 'Luna', last: 'Is Rex ready for a playdate?', time: 'Just now', img: 'https://picsum.photos/seed/dog/100/100', active: true, online: true },
    { name: 'Milo', last: 'Loved that new catnip toy!', time: '2h ago', img: 'https://picsum.photos/seed/cat/100/100' },
    { name: 'Daisy', last: 'Sent a photo of Gear', time: '4h ago', img: 'https://picsum.photos/seed/frenchie/100/100', unread: 2 },
    { name: 'Bella', last: 'Appointment is confirmed.', time: 'Yesterday', img: 'https://picsum.photos/seed/whitecat/100/100' }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar List */}
      <aside className="w-80 border-r border-primary/10 bg-white flex flex-col">
        <div className="p-8">
          <h1 className="text-3xl font-black mb-6">Messages</h1>
          <div className="relative">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input type="text" placeholder="Search matches..." className="w-full pl-12 pr-4 py-4 bg-bg-light border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 font-medium"/>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-4 space-y-2">
          {threads.map((t, i) => (
            <div key={i} className={`flex items-center gap-4 p-4 rounded-3xl cursor-pointer transition-all ${t.active ? 'bg-primary/10 border-2 border-primary/10 shadow-sm' : 'hover:bg-bg-light'}`}>
              <div className="relative flex-shrink-0">
                <img src={t.img} className={`w-14 h-14 rounded-full object-cover ${t.active ? 'border-2 border-primary' : 'grayscale'}`} alt="avatar"/>
                {t.online && <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-4 border-white rounded-full"></div>}
                {t.unread && (
                  <div className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black shadow-lg">
                    {t.unread}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-black text-sm truncate">{t.name}</span>
                  <span className={`text-[10px] font-bold ${t.active ? 'text-primary' : 'text-slate-400'} uppercase tracking-widest`}>{t.time}</span>
                </div>
                <p className={`text-xs truncate font-medium ${t.unread ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>{t.last}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-primary/5 m-4 rounded-3xl border border-primary/10">
          <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">Shop Recommendation</p>
          <div className="flex gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <span className="material-icons text-primary text-2xl">shopping_basket</span>
            </div>
            <div>
              <p className="text-xs font-black leading-tight">Luna's Favorite Kibble</p>
              <p className="text-[10px] text-slate-500 font-bold mt-1">20% off for first-time matches</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat */}
      <section className="flex-1 flex flex-col bg-white relative">
        <header className="h-20 border-b border-primary/10 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl border-2 border-primary overflow-hidden shadow-lg shadow-primary/5">
              <img src="https://picsum.photos/seed/dog/200/200" className="w-full h-full object-cover" alt="Luna"/>
            </div>
            <div>
              <h2 className="font-black text-lg leading-none flex items-center gap-2">
                Luna 
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-200"></span>
              </h2>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline decoration-2 mt-1">View Pet Profile</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-400">
              <span className="material-icons">videocam</span>
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-400">
              <span className="material-icons">info</span>
            </button>
            <button className="px-6 py-3 bg-primary/10 text-primary text-xs font-black rounded-full hover:bg-primary hover:text-white transition-all uppercase tracking-widest shadow-sm">
              Buy Gift
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/50 custom-scrollbar">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 bg-white text-[10px] font-black text-slate-400 rounded-full shadow-sm border border-slate-100 uppercase tracking-widest">March 15, 2024</span>
          </div>

          <div className="flex gap-4 max-w-[80%]">
            <img src="https://picsum.photos/seed/dog/50/50" className="w-10 h-10 rounded-full self-end border-2 border-white shadow-sm" alt="luna"/>
            <div className="space-y-2">
              <div className="bg-sky-500 text-white px-6 py-4 rounded-3xl rounded-bl-none shadow-xl shadow-sky-100">
                <p className="text-sm font-medium leading-relaxed">Hi there! I saw Rex in the feed and thought he looked like the perfect playmate for Luna.</p>
              </div>
              <span className="text-[10px] text-slate-400 font-bold ml-2 uppercase tracking-widest">10:42 AM</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 max-w-[80%] ml-auto">
            <div className="bg-primary text-white px-6 py-4 rounded-3xl rounded-br-none shadow-xl shadow-primary/20">
              <p className="text-sm font-medium leading-relaxed">Hey! Rex is definitely a bundle of energy. He loves golden retrievers!</p>
            </div>
            <span className="text-[10px] text-slate-400 font-bold mr-2 uppercase tracking-widest">10:45 AM</span>
          </div>

          <div className="flex flex-col items-end gap-3 max-w-[80%] ml-auto">
            <div className="bg-primary text-white p-1 rounded-3xl rounded-br-none shadow-xl shadow-primary/20 overflow-hidden">
              <img src="https://picsum.photos/seed/play/800/400" className="rounded-2xl w-full h-auto object-cover max-h-64" alt="Rex"/>
              <div className="px-6 py-4">
                <p className="text-sm font-medium">Rex just got his new harness! Sunday works for us.</p>
              </div>
            </div>
            <span className="text-[10px] text-slate-400 font-bold mr-2 uppercase tracking-widest">11:02 AM</span>
          </div>
          
          <div className="flex gap-4 max-w-[80%]">
             <img src="https://picsum.photos/seed/dog/50/50" className="w-10 h-10 rounded-full self-end border-2 border-white shadow-sm" alt="luna"/>
            <div className="bg-slate-100 px-6 py-4 rounded-3xl flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        </div>

        <footer className="p-8 bg-white border-t border-primary/10">
          <div className="max-w-4xl mx-auto flex items-end gap-4">
            <button className="w-14 h-14 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 rounded-3xl transition-all">
              <span className="material-icons text-3xl">add_circle_outline</span>
            </button>
            <div className="flex-1 relative">
              <textarea placeholder="Type a message to Luna..." className="w-full px-6 py-4 bg-bg-light border-none rounded-3xl resize-none text-sm font-medium focus:ring-2 focus:ring-primary/20 min-h-[56px] max-h-32" rows={1}></textarea>
              <button className="absolute right-4 bottom-4 text-slate-400 hover:text-primary">
                <span className="material-icons">insert_emoticon</span>
              </button>
            </div>
            <button className="w-14 h-14 bg-primary text-white rounded-3xl flex items-center justify-center shadow-xl shadow-primary/20 hover:scale-[1.05] active:scale-[0.95] transition-all">
              <span className="material-icons text-2xl">send</span>
            </button>
          </div>
          <p className="text-center text-[10px] text-slate-400 font-bold mt-4 uppercase tracking-widest">Messages are end-to-end encrypted for your safety.</p>
        </footer>
        
        {/* Floating Quick Actions */}
        <div className="absolute bottom-32 right-10 flex flex-col items-end gap-3 group">
          <div className="bg-white border-2 border-primary/10 rounded-3xl shadow-2xl p-4 mb-2 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-56">
            <p className="text-[9px] font-black text-primary mb-3 uppercase tracking-widest">QUICK ACTIONS</p>
            <div className="space-y-1">
              <button className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-primary/5 rounded-xl flex items-center gap-3 text-slate-600 hover:text-primary transition-all">
                <span className="material-icons text-lg">event</span> Schedule Playdate
              </button>
              <button className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-primary/5 rounded-xl flex items-center gap-3 text-slate-600 hover:text-primary transition-all">
                <span className="material-icons text-lg">location_on</span> Suggest Park
              </button>
              <button className="w-full text-left px-3 py-2 text-xs font-bold hover:bg-primary/5 rounded-xl flex items-center gap-3 text-slate-600 hover:text-primary transition-all">
                <span className="material-icons text-lg">redeem</span> Send Treat Pack
              </button>
            </div>
          </div>
          <button className="w-16 h-16 bg-white border-4 border-primary text-primary rounded-3xl flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white transition-all">
            <span className="material-icons text-3xl">bolt</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default MessagesPage;
