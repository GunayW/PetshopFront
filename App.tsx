
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DiscoveryPage from './pages/DiscoveryPage';
import ShopPage from './pages/ShopPage';
import ShopListingPage from './pages/ShopListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import UserProfilePage from './pages/UserProfilePage';
import PetProfilePage from './pages/PetProfilePage';
import MessagesPage from './pages/MessagesPage';
import BlogPage from './pages/BlogPage';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/discovery', icon: 'explore', label: 'Discovery' },
    { path: '/shop', icon: 'shopping_bag', label: 'Pet Shop' },
    { path: '/messages', icon: 'chat_bubble_outline', label: 'Messages', badge: 3 },
    { path: '/blog', icon: 'article', label: 'Health Tips' },
    { path: '/profile', icon: 'person_outline', label: 'My Profile' },
  ];

  if (currentPath === '/' || currentPath === '/checkout') return null;

  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-primary/10 flex flex-col hidden lg:flex h-screen sticky top-0">
      <div className="p-6">
        <Link to="/discovery" className="flex items-center gap-2 mb-10">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="material-icons text-white">pets</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-white italic">PetPulse</h1>
        </Link>
        
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold ${
                currentPath.startsWith(item.path)
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-500 hover:bg-primary/5 hover:text-primary'
              }`}
            >
              <span className="material-icons">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <div className="bg-gradient-to-br from-primary to-orange-400 rounded-2xl p-4 text-white">
          <p className="text-[10px] font-bold uppercase tracking-wider opacity-80 mb-1">Weekly Special</p>
          <h4 className="font-bold text-sm mb-3 leading-tight">Premium Kibble 20% Off</h4>
          <Link to="/shop" className="block w-full bg-white text-primary text-xs font-bold py-2 rounded-lg text-center hover:bg-slate-50 transition-colors">
            Shop Now
          </Link>
        </div>
        
        <div className="mt-6 flex items-center gap-3 p-2 bg-slate-50 dark:bg-white/5 rounded-xl">
          <img 
            src="https://picsum.photos/seed/sarah/100/100" 
            className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" 
            alt="User"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">Sarah J.</p>
            <p className="text-[10px] text-slate-400 font-medium">Premium Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/discovery" element={<DiscoveryPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/listing" element={<ShopListingPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/pet/:id" element={<PetProfilePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
