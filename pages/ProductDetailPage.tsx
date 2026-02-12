
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [size, setSize] = useState('Small (Pups)');

  return (
    <main className="p-4 lg:p-8 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm font-bold text-slate-400">
        <Link to="/shop" className="hover:text-primary transition-colors">Home</Link>
        <span className="material-icons text-xs">chevron_right</span>
        <Link to="/shop/listing" className="hover:text-primary transition-colors">Shop</Link>
        <span className="material-icons text-xs">chevron_right</span>
        <span className="text-slate-900">Glow-Buddy™ Interactive Ball</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Gallery */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-square rounded-4xl overflow-hidden bg-white border border-primary/5 shadow-2xl shadow-primary/5 group">
            <img 
              src="https://picsum.photos/seed/ball/1000/1000" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Product Main"
            />
            <button className="absolute top-8 right-8 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-xl hover:bg-primary hover:text-white transition-all">
              <span className="material-icons">favorite_border</span>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4 lg:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`aspect-square rounded-3xl overflow-hidden border-4 transition-all cursor-pointer ${i === 1 ? 'border-primary' : 'border-transparent hover:border-primary/30'}`}>
                <img src={`https://picsum.photos/seed/ball-${i}/400/400`} className="w-full h-full object-cover" alt="thumb"/>
                {i === 4 && (
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-black text-xl">+2</span>
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">Best Seller</span>
              <div className="flex items-center text-primary">
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star</span>
                <span className="material-icons text-sm">star_half</span>
                <span className="ml-2 text-sm font-extrabold text-slate-400 tracking-wide uppercase">(128 reviews)</span>
              </div>
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-[1.1]">Glow-Buddy™ Interactive Bounce Ball</h1>
            <p className="text-3xl font-black text-primary">$24.99 <span className="text-xl text-slate-300 font-bold line-through ml-2">$32.00</span></p>
          </div>

          <div className="p-8 bg-primary/5 rounded-4xl border border-primary/10 relative">
             <span className="material-icons absolute -top-3 -left-3 text-primary text-4xl">format_quote</span>
             <p className="text-slate-600 leading-relaxed italic font-medium">
              "The only toy that keeps my Golden Retriever busy for hours! It giggles, it glows, and it stands up to the toughest chewers."
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
              <span className="material-icons text-primary">straighten</span>
              Select Size
            </h3>
            <div className="flex flex-wrap gap-4">
              {['Small (Pups)', 'Medium', 'Large'].map((s) => (
                <button 
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-8 py-4 rounded-2xl border-2 font-extrabold transition-all ${
                    size === s 
                      ? 'border-primary bg-primary/5 text-primary shadow-lg shadow-primary/10' 
                      : 'border-slate-100 hover:border-primary/50 text-slate-500'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Link to="/checkout" className="flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 rounded-3xl font-black text-xl shadow-2xl shadow-primary/20 hover:translate-y-[-2px] transition-all">
              <span className="material-icons">bolt</span>
              Quick Buy
            </Link>
            <button className="flex items-center justify-center gap-3 bg-secondary text-white px-8 py-5 rounded-3xl font-black text-xl shadow-2xl shadow-secondary/20 hover:translate-y-[-2px] transition-all">
              <span className="material-icons">add_shopping_cart</span>
              Add to Cart
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                <span className="material-icons">local_shipping</span>
              </div>
              <span className="text-sm font-bold text-slate-600">Free Delivery</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                <span className="material-icons">verified_user</span>
              </div>
              <span className="text-sm font-bold text-slate-600">1 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="pt-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold">Customer Paw-sitives</h2>
            <p className="text-slate-400 font-medium text-lg">Real feedback from real pet parents</p>
          </div>
          <div className="flex items-center gap-10 bg-white p-8 rounded-4xl border border-primary/5 shadow-sm">
            <div className="text-center px-6 border-r border-slate-100">
              <div className="text-5xl font-black text-primary">4.8</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Average</div>
            </div>
            <div className="flex flex-col gap-2">
              {[5, 4, 3].map((star, i) => (
                <div key={star} className="flex items-center gap-3">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className={`material-icons text-xs ${j < star ? 'text-primary' : 'text-slate-100'}`}>star</span>
                    ))}
                  </div>
                  <div className="w-40 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-primary ${i === 0 ? 'w-[85%]' : i === 1 ? 'w-[10%]' : 'w-[5%]'}`}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
              Write Review
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: 'Sarah Jenkins', text: "Luna (my border collie) literally carries this everywhere. The glow is super bright for our late-night garden sessions. Best purchase of the year!", avatar: 'https://picsum.photos/seed/sarah/100/100' },
            { name: 'Mike Ross', text: "Very durable material. My bulldog usually destroys toys in minutes, but this one has lasted three weeks and still looks brand new. Amazing quality.", avatar: 'https://picsum.photos/seed/mike/100/100' },
            { name: 'Emily Wang', text: "Great concept, the giggle sound is really funny. Wish it came in more colors though! But overall my pup is very happy with it.", avatar: 'https://picsum.photos/seed/emily/100/100' }
          ].map((rev, i) => (
            <div key={i} className="bg-white p-10 rounded-4xl border border-primary/5 shadow-lg shadow-slate-200/50 relative group">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl rotate-[-10deg] group-hover:rotate-0 transition-transform">
                <span className="material-icons">format_quote</span>
              </div>
              <div className="flex items-center gap-4 mb-8 pt-2">
                <img src={rev.avatar} className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/10" alt="user"/>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900">{rev.name}</h4>
                  <div className="flex text-primary scale-90 -ml-4">
                    {[...Array(5)].map((_, j) => <span key={j} className="material-icons">star</span>)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium mb-8">"{rev.text}"</p>
              <div className="flex items-center gap-2 text-[10px] font-black text-secondary uppercase tracking-widest">
                <span class="material-icons text-sm">verified</span>
                Verified Paw-ent
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
