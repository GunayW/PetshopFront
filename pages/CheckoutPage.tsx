
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-light">
      <header className="py-6 px-10 flex justify-between items-center bg-white/50 backdrop-blur-md border-b border-primary/10">
        <Link to="/shop" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
            <span className="material-icons">pets</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-primary italic">PetPulse</span>
        </Link>
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          <span className="material-icons text-lg">lock</span>
          Secure Checkout
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-12">
            {/* Progress */}
            <nav className="flex items-center justify-between max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg shadow-secondary/20">
                  <span className="material-icons">local_shipping</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Shipping</span>
              </div>
              <div className="flex-1 h-1 bg-secondary mx-4 rounded-full"></div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white text-slate-300 flex items-center justify-center">
                  <span className="material-icons">payments</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Payment</span>
              </div>
              <div className="flex-1 h-1 bg-slate-100 mx-4 rounded-full"></div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white text-slate-300 flex items-center justify-center">
                  <span className="material-icons">visibility</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Review</span>
              </div>
            </nav>

            {/* Forms */}
            <div className="space-y-8">
              <section className="bg-white p-10 rounded-4xl shadow-sm border border-primary/5">
                <div className="mb-10">
                  <h2 className="text-3xl font-extrabold text-slate-900">Shipping Information</h2>
                  <p className="text-slate-400 font-medium">Tell us where your pet goodies are headed.</p>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-black uppercase tracking-widest mb-3 text-slate-500">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary font-medium transition-all"/>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-black uppercase tracking-widest mb-3 text-slate-500">Street Address</label>
                    <input type="text" placeholder="123 Puppy Lane" className="w-full px-6 py-4 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary font-medium transition-all"/>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-3 text-slate-500">City</label>
                    <input type="text" placeholder="Barkville" className="w-full px-6 py-4 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary font-medium transition-all"/>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest mb-3 text-slate-500">Zip Code</label>
                      <input type="text" placeholder="12345" className="w-full px-6 py-4 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary font-medium transition-all"/>
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest mb-3 text-slate-500">State</label>
                      <select className="w-full px-6 py-4 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary font-medium cursor-pointer">
                        <option>NY</option>
                        <option>CA</option>
                        <option>TX</option>
                      </select>
                    </div>
                  </div>
                </form>
              </section>

              <section className="bg-white p-10 rounded-4xl shadow-sm border border-primary/5">
                <h3 className="text-xl font-extrabold mb-8 flex items-center gap-3">
                  <span className="material-icons text-secondary">speed</span>
                  Shipping Method
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="relative flex cursor-pointer rounded-3xl border-2 border-primary bg-primary/5 p-6 shadow-lg shadow-primary/5">
                    <input type="radio" name="ship" defaultChecked className="sr-only"/>
                    <div className="flex-1">
                      <p className="text-lg font-black text-slate-900">Standard Delivery</p>
                      <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">3-5 Business Days</p>
                    </div>
                    <span className="text-xl font-black text-primary">Free</span>
                  </label>
                  <label className="relative flex cursor-pointer rounded-3xl border-2 border-slate-100 bg-white p-6 hover:border-primary/50 transition-all">
                    <input type="radio" name="ship" className="sr-only"/>
                    <div className="flex-1">
                      <p className="text-lg font-black text-slate-900">Express Paws</p>
                      <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Overnight Delivery</p>
                    </div>
                    <span className="text-xl font-black text-slate-900">$15.00</span>
                  </label>
                </div>
              </section>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-all font-extrabold text-sm uppercase tracking-widest">
                  <span className="material-icons">arrow_back</span>
                  Return to Cart
                </button>
                <button className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-3xl font-black text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] flex items-center gap-3">
                  Continue to Payment
                  <span className="material-icons">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-4xl shadow-2xl overflow-hidden border border-slate-100 sticky top-10">
              <div className="p-8 border-b border-slate-50 bg-slate-50/50">
                <h2 className="text-xl font-black flex items-center gap-3">
                  <span className="material-icons text-primary">shopping_basket</span>
                  Order Summary
                </h2>
              </div>
              <div className="p-8 space-y-8">
                <div className="space-y-6">
                  {[
                    { name: 'Robo-Bone Interactive Toy', qty: 1, price: 45, image: 'https://picsum.photos/seed/toy/200/200' },
                    { name: 'Organic Cat Grass Kit', qty: 2, price: 24, image: 'https://picsum.photos/seed/grass/200/200' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-slate-50 flex-shrink-0 overflow-hidden border border-slate-100">
                        <img src={item.image} className="w-full h-full object-cover" alt="item"/>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-extrabold text-slate-900 line-clamp-1">{item.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Qty: {item.qty} • Neon Coral</p>
                        <p className="text-sm font-black text-primary mt-2">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-50 flex gap-2">
                  <input type="text" placeholder="Promo code" className="flex-1 px-4 py-3 rounded-xl border-none bg-slate-50 focus:ring-1 focus:ring-primary text-sm font-medium"/>
                  <button className="px-6 py-3 bg-slate-900 text-white text-xs font-black rounded-xl hover:bg-black transition-all uppercase tracking-widest">Apply</button>
                </div>

                <div className="pt-8 border-t border-slate-50 space-y-4">
                  <div className="flex justify-between text-sm font-bold text-slate-500">
                    <span>Subtotal</span>
                    <span className="text-slate-900">$69.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-500">
                    <span>Shipping</span>
                    <span className="text-secondary uppercase tracking-widest text-[10px]">Calculated at next step</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-500">
                    <span>Estimated Taxes</span>
                    <span className="text-slate-900">$5.52</span>
                  </div>
                  <div className="flex justify-between pt-6 border-t border-slate-50 items-end">
                    <span className="text-xl font-black">Total</span>
                    <span className="text-3xl font-black text-primary tracking-tight">$74.52</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 p-5 rounded-3xl flex flex-col items-center text-center shadow-sm">
                <span className="material-icons text-secondary mb-2">verified_user</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Secure Payment</span>
              </div>
              <div className="bg-white/60 p-5 rounded-3xl flex flex-col items-center text-center shadow-sm">
                <span className="material-icons text-secondary mb-2">potted_plant</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Eco-Friendly Pak</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
