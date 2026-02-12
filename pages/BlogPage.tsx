
import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <main className="p-4 lg:p-12 space-y-16">
      {/* Featured Hero */}
      <section className="relative group overflow-hidden rounded-4xl bg-white shadow-2xl shadow-primary/5 flex flex-col lg:row-reverse">
        <div className="lg:w-3/5 h-[450px] overflow-hidden">
          <img 
            src="https://picsum.photos/seed/happy-dog/1200/800" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            alt="Hero"
          />
        </div>
        <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6 w-fit">Featured Story</span>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Decoding Your Pet's Body Language: A Guide
          </h1>
          <p className="text-slate-600 font-medium text-lg mb-10 leading-relaxed">
            Ever wondered why your cat kneads your lap or why your dog tilts their head? We dive deep into the silent signals used to talk to us.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden shadow-sm">
                <img src="https://picsum.photos/seed/doc/100/100" alt="doc"/>
              </div>
              <div>
                <p className="font-black text-slate-900">Dr. Sarah Whiskers</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">8 min read</p>
              </div>
            </div>
            <a href="#" className="flex items-center gap-2 text-secondary font-black hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
              Read More <span className="material-icons text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          <div className="flex items-center justify-between border-b-2 border-slate-100 pb-6">
            <h2 className="text-4xl font-black italic">Latest Resources</h2>
            <div className="flex gap-2">
              <button className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-primary">
                <span className="material-icons">grid_view</span>
              </button>
              <button className="p-3 hover:bg-white rounded-xl transition-all text-slate-300">
                <span className="material-icons">view_list</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { cat: 'Nutrition', title: 'The Best Superfoods for Senior Cats', desc: 'As your feline companion ages, their nutritional needs change. Discover the top 5 ingredients.', img: 'https://picsum.photos/seed/catfood/600/400', color: 'secondary' },
              { cat: 'Training', title: "Mastering the 'Recall': 3 Simple Steps", desc: 'Getting your dog to come back when called is vital for safety. We break down techniques that work.', img: 'https://picsum.photos/seed/training/600/400', color: 'primary' },
              { cat: 'Health', title: 'Seasonal Allergies in Pets: Signs & Care', desc: "Itchy skin and watery eyes aren't just for humans. Learn how to identify and treat them.", img: 'https://picsum.photos/seed/itchy/600/400', color: 'orange-500' },
              { cat: 'Grooming', title: 'Stress-Free Bathtime for Your Dog', desc: 'Turn chaos into a calm spa day. These tips will help even the most water-shy dogs.', img: 'https://picsum.photos/seed/bath/600/400', color: 'blue-500' }
            ].map((art, i) => (
              <article key={i} className="group bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-2 border-transparent hover:border-primary/10">
                <div className="relative h-56 overflow-hidden">
                  <img src={art.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="article"/>
                  <span className={`absolute top-5 left-5 bg-${art.color} text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg`}>{art.cat}</span>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-black group-hover:text-primary transition-colors leading-tight">{art.title}</h3>
                  <p className="text-slate-500 font-medium line-clamp-2 leading-relaxed">{art.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">March 12, 2024</span>
                    <a href="#" className="text-secondary text-xs font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Read Article</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center pt-10">
            <nav className="flex items-center gap-3">
              <button className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all text-slate-300">
                <span className="material-icons">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black shadow-lg shadow-primary/20">1</button>
              <button className="w-12 h-12 rounded-full hover:bg-primary/10 flex items-center justify-center font-black transition-all">2</button>
              <button className="w-12 h-12 rounded-full hover:bg-primary/10 flex items-center justify-center font-black transition-all">3</button>
              <span className="px-4 text-slate-300">...</span>
              <button className="w-12 h-12 rounded-full hover:bg-primary/10 flex items-center justify-center font-black transition-all">12</button>
              <button className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all text-slate-300">
                <span className="material-icons">chevron_right</span>
              </button>
            </nav>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-10">
          <div className="bg-white p-8 rounded-4xl shadow-sm space-y-6">
            <h3 className="text-xl font-black">Find a Topic</h3>
            <div className="relative">
              <input type="text" placeholder="Search guides..." className="w-full bg-bg-light border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-primary font-medium"/>
              <span className="material-icons absolute right-5 top-5 text-slate-400">search</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-4xl shadow-sm space-y-8">
            <h3 className="text-xl font-black">Popular Topics</h3>
            <div className="flex flex-wrap gap-3">
              {['Nutrition', 'Training', 'Health', 'Behavior', 'Grooming', 'Puppy Care'].map((tag, i) => (
                <a key={tag} href="#" className={`px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary/10 text-primary shadow-lg shadow-primary/5' : 'bg-bg-light text-slate-500 hover:bg-primary/10 hover:text-primary'}`}>{tag}</a>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-4xl shadow-sm space-y-8">
            <h3 className="text-xl font-black">Trending Articles</h3>
            <div className="space-y-8">
              {[
                { n: '01', t: 'Introduce a New Cat', m: 'Behavior • 12k views' },
                { n: '02', t: 'Raw Food Diets Safety', m: 'Nutrition • 9k views' },
                { n: '03', t: 'Dog Parks: Pro vs Cons', m: 'Training • 7k views' }
              ].map((item) => (
                <a key={item.n} href="#" className="group flex items-start gap-6">
                  <span className="text-4xl font-black text-slate-100 group-hover:text-primary transition-colors italic">{item.n}</span>
                  <div>
                    <h4 className="font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">{item.t}</h4>
                    <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mt-2">{item.m}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-orange-500 p-10 rounded-4xl shadow-2xl text-white relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-black tracking-tight">Join the Pack</h3>
              <p className="text-white/80 font-medium leading-relaxed">Get weekly expert advice, health alerts, and exclusive shop discounts.</p>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Your email address" className="w-full bg-white/20 border-white/20 rounded-2xl py-4 px-6 placeholder:text-white/60 focus:bg-white/30 focus:ring-0 text-sm font-medium"/>
                <button className="w-full bg-white text-primary font-black py-4 rounded-2xl hover:bg-slate-50 transition-all shadow-xl uppercase tracking-widest text-xs">Subscribe Now</button>
              </form>
            </div>
            <span className="material-icons absolute -bottom-10 -right-10 text-[200px] text-white/10 rotate-12 group-hover:scale-110 transition-transform">pets</span>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default BlogPage;
