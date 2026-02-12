
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Branding & Visuals */}
      <section className="hidden lg:flex flex-col justify-between p-12 bg-pastel-hero relative overflow-hidden">
        <div className="z-10 flex items-center gap-2">
          <div className="bg-primary p-2 rounded-xl">
            <span className="material-icons text-white text-3xl">pets</span>
          </div>
          <span className="text-2xl font-extrabold text-slate-900 italic">PetPulse</span>
        </div>

        <div className="z-10 space-y-12">
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAakDrQljbQIw1pekjPyTFvDYPKivk4Njw3C1Npk-ENArJsTbWnY7Snpqc61SJogZ5j3yG5Dn7n-e4gTHzHvorLbKjuHgeWnF3ki_r2nd8d95R8zZ86KeZsF1UfoZh3qZjoK8UnsVnsMoHtN5UV9--vJO7J4A2KK-jOH0M6uH_hbY4QEOwKTtELZimFw_02vPkggTHXYlc70EGUoB1BtdE1wt6NhBGV6QocfdsBDHkm8P5IRENx9yKGki0UjYp57pMKcQJDPeR4Ct79" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" 
              alt="Playful pets"
            />
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-primary/10 animate-bounce">
              <span className="material-icons text-primary">favorite</span>
            </div>
          </div>
          
          <div className="text-left space-y-4">
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
              Find their soulmate, <br/>
              <span className="text-primary italic">fill their bowl.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-sm">
              Join the world's most whimsical community for pet lovers. Discover matches, shop the best treats, and share the love.
            </p>
          </div>
        </div>

        <div className="z-10 flex gap-6 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-primary transition-colors">Help Center</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
        
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      {/* Right: Forms */}
      <section className="bg-white flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex justify-center mb-8">
             <div className="bg-primary p-2 rounded-xl flex items-center gap-2">
              <span className="material-icons text-white text-2xl">pets</span>
              <span className="text-xl font-extrabold text-white">PetPulse</span>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Welcome Back!</h2>
              <p className="text-slate-500">Ready to fetch some new friends?</p>
            </div>

            <div className="inline-flex p-1 bg-slate-100 rounded-xl w-full">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${isLogin ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
              >
                Log In
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${!isLogin ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-700">
              <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-5 h-5" alt="Google"/>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-700">
              <span className="material-icons text-xl">apple</span>
              Apple
            </button>
          </div>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-xs text-slate-400 font-bold uppercase tracking-widest">or email</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/discovery'); }}>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">alternate_email</span>
                <input 
                  type="email" 
                  required
                  placeholder="buddy@paws.com" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white text-slate-900 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
              </div>
              <div className="relative group">
                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white text-slate-900 transition-all font-medium"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <span className="material-icons-outlined">visibility_off</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" className="w-5 h-5 rounded border-slate-200 text-primary focus:ring-primary" id="remember"/>
              <label htmlFor="remember" className="text-sm text-slate-600 font-medium cursor-pointer">Keep me signed in</label>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold py-5 rounded-3xl shadow-xl shadow-primary/20 transform transition-all active:scale-[0.98]">
              Sign Into Your Account
            </button>
          </form>

          <p className="text-center text-slate-600 text-sm font-medium">
            Don't have a PetPulse account? <br/>
            <button onClick={() => setIsLogin(false)} className="text-primary font-extrabold hover:underline">Join the pack now!</button>
          </p>
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
