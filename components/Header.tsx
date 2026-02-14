
import React, { useState } from 'react';
import { AppView } from '../types';
import BrandLogo from './BrandLogo';

interface HeaderProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  const toggleMobileSub = (name: string) => {
    setActiveMobileSub(activeMobileSub === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-100">
      {/* Top Info Bar */}
      <div className="bg-[#0a1428] text-white text-[10px] md:text-xs py-2 px-4 flex justify-between items-center overflow-hidden border-b border-white/5">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2 font-black uppercase tracking-widest text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></span>
            ISO 9001:2015 CERTIFIED
          </span>
          <span className="hidden sm:flex items-center gap-2 font-black uppercase tracking-widest text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"></span>
            NABL ACCREDITED
          </span>
        </div>
        <div className="flex gap-6 font-black uppercase tracking-tighter text-[9px]">
          <a href="#" className="hover:text-blue-400 transition-colors">Emergency: +91 91550 01150</a>
          <a href="#" className="hidden md:block hover:text-blue-400 transition-colors">Partner Portal</a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        {/* Logo and Brand Name with Silver Dot */}
        <div 
          onClick={() => setView(AppView.HOME)} 
          className="cursor-pointer flex items-center gap-4 group"
        >
          <BrandLogo size="md" />
          <div className="border-l border-slate-200 pl-4 relative">
            <span className="text-xl md:text-2xl font-black text-[#0a1428] block leading-none tracking-tighter group-hover:text-slate-600 transition-colors">IMAGICA</span>
            {/* The Stylized Silver Dot below the line */}
            <div className="absolute -bottom-1 left-4 w-1 h-1 bg-slate-400 rounded-full animate-dot opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-[10px] uppercase text-slate-400 font-black tracking-[0.4em] mt-1 block">Health Scan</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-[12px] font-black uppercase tracking-[0.15em] text-slate-600">
          <button 
            onClick={() => setView(AppView.HOME)} 
            className={`transition-colors hover:text-blue-600 relative py-8 ${currentView === AppView.HOME ? 'text-blue-600' : ''}`}
          >
            Home
            {currentView === AppView.HOME && <span className="absolute bottom-6 left-0 w-full h-0.5 bg-blue-600"></span>}
          </button>
          
          {/* About Us Dropdown */}
          <div className="relative group py-8">
            <button 
              className={`flex items-center gap-2 transition-colors hover:text-blue-600 ${[AppView.ABOUT, AppView.LEADERSHIP, AppView.COMPLIANCE].includes(currentView) ? 'text-blue-600' : ''}`}
            >
              About Us <span className="text-[9px] opacity-40 group-hover:rotate-180 transition-transform">▼</span>
            </button>
            <div className="absolute top-full -left-6 w-72 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-3xl p-6 border border-slate-100 transition-all transform origin-top scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible z-50">
              <div className="space-y-1">
                <button onClick={() => setView(AppView.ABOUT)} className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all group/item">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-xl group-hover/item:bg-slate-800 group-hover/item:text-white transition-colors">🏢</div>
                  <div className="text-left">
                    <p className="text-[11px] font-black text-slate-900 uppercase">Corporate Profile</p>
                    <p className="text-[9px] font-medium text-slate-400 normal-case mt-0.5 tracking-normal">Our vision and legacy.</p>
                  </div>
                </button>
                <button onClick={() => setView(AppView.LEADERSHIP)} className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all group/item">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-xl group-hover/item:bg-slate-800 group-hover/item:text-white transition-colors">👨‍⚕️</div>
                  <div className="text-left">
                    <p className="text-[11px] font-black text-slate-900 uppercase">Medical Leadership</p>
                    <p className="text-[9px] font-medium text-slate-400 normal-case mt-0.5 tracking-normal">Board of MD Specialists.</p>
                  </div>
                </button>
                <button onClick={() => setView(AppView.COMPLIANCE)} className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all group/item">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-xl group-hover/item:bg-slate-800 group-hover/item:text-white transition-colors">🎖️</div>
                  <div className="text-left">
                    <p className="text-[11px] font-black text-slate-900 uppercase">Quality Compliance</p>
                    <p className="text-[9px] font-medium text-slate-400 normal-case mt-0.5 tracking-normal">ISO & NABL Accreditations.</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Investors Dropdown */}
          <div className="relative group py-8">
            <button 
              className={`flex items-center gap-2 transition-colors hover:text-blue-600 ${[AppView.INVESTORS, AppView.GOVERNANCE, AppView.SHAREHOLDERS].includes(currentView) ? 'text-blue-600' : ''}`}
            >
              Investors <span className="text-[9px] opacity-40 group-hover:rotate-180 transition-transform">▼</span>
            </button>
            <div className="absolute top-full -left-6 w-72 bg-[#0a1428] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl p-6 border border-white/5 transition-all transform origin-top scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible z-50">
              <div className="space-y-1">
                <button onClick={() => setView(AppView.INVESTORS)} className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover/item:bg-white/20 transition-colors">📊</div>
                  <div className="text-left">
                    <p className="text-[11px] font-black text-white uppercase">Financial Results</p>
                    <p className="text-[9px] font-medium text-slate-500 normal-case mt-0.5 tracking-normal">Quarterly performance.</p>
                  </div>
                </button>
                <button onClick={() => setView(AppView.GOVERNANCE)} className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover/item:bg-white/20 transition-colors">🛡️</div>
                  <div className="text-left">
                    <p className="text-[11px] font-black text-white uppercase">Governance Framework</p>
                    <p className="text-[9px] font-medium text-slate-500 normal-case mt-0.5 tracking-normal">Corporate sustainability.</p>
                  </div>
                </button>
                <button onClick={() => setView(AppView.SHAREHOLDERS)} className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover/item:bg-white/20 transition-colors">📈</div>
                  <div className="text-left">
                    <p className="text-[11px] font-black text-white uppercase">Shareholder Services</p>
                    <p className="text-[9px] font-medium text-slate-500 normal-case mt-0.5 tracking-normal">Growth & dividends.</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setView(AppView.CAREERS)} 
            className={`transition-colors hover:text-blue-600 py-8 ${currentView === AppView.CAREERS ? 'text-blue-600' : ''}`}
          >
            Careers
          </button>
          
          <button 
            onClick={() => setView(AppView.CONTACT)} 
            className={`transition-colors hover:text-blue-600 py-8 ${currentView === AppView.CONTACT ? 'text-blue-600' : ''}`}
          >
            Contact
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button 
            onClick={() => setView(AppView.REPORTS)}
            className="px-6 py-3 text-[11px] font-black uppercase tracking-widest text-[#0a1428] border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 rounded-2xl transition"
          >
            Reports
          </button>
          <button 
            onClick={() => setView(AppView.BOOKING)}
            className="px-8 py-3 text-[11px] font-black uppercase tracking-[0.2em] bg-slate-900 text-white rounded-2xl hover:bg-slate-800 shadow-2xl shadow-slate-100 transition transform hover:-translate-y-1 active:translate-y-0"
          >
            Schedule Test
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-2xl p-4 bg-slate-50 rounded-2xl text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[112px] bg-white z-[60] overflow-y-auto animate-fade-in p-6">
          <div className="space-y-2">
            <button onClick={() => {setView(AppView.HOME); setIsMenuOpen(false);}} className="w-full text-left p-6 text-xl font-black uppercase tracking-tighter text-slate-900 border-b border-slate-50">Home</button>
            
            {/* About Mobile Sub */}
            <div className="border-b border-slate-50">
              <button onClick={() => toggleMobileSub('about')} className="w-full flex justify-between items-center p-6 text-xl font-black uppercase tracking-tighter text-slate-900">
                About Us <span>{activeMobileSub === 'about' ? '−' : '+'}</span>
              </button>
              {activeMobileSub === 'about' && (
                <div className="px-6 pb-6 space-y-4 animate-slide-down">
                  <button onClick={() => {setView(AppView.ABOUT); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-slate-500">Corporate Profile</button>
                  <button onClick={() => {setView(AppView.LEADERSHIP); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-slate-500">Leadership Team</button>
                  <button onClick={() => {setView(AppView.COMPLIANCE); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-slate-500">Quality & Compliance</button>
                </div>
              )}
            </div>

            {/* Investor Mobile Sub */}
            <div className="border-b border-slate-50">
              <button onClick={() => toggleMobileSub('investors')} className="w-full flex justify-between items-center p-6 text-xl font-black uppercase tracking-tighter text-slate-900">
                Investors <span>{activeMobileSub === 'investors' ? '−' : '+'}</span>
              </button>
              {activeMobileSub === 'investors' && (
                <div className="px-6 pb-6 space-y-4 animate-slide-down">
                  <button onClick={() => {setView(AppView.INVESTORS); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-slate-500">Financial Results</button>
                  <button onClick={() => {setView(AppView.GOVERNANCE); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-slate-500">Governance Framework</button>
                  <button onClick={() => {setView(AppView.SHAREHOLDERS); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-slate-500">Shareholder Services</button>
                </div>
              )}
            </div>

            <button onClick={() => {setView(AppView.CAREERS); setIsMenuOpen(false);}} className="w-full text-left p-6 text-xl font-black uppercase tracking-tighter text-slate-900 border-b border-slate-50">Careers</button>
            <button onClick={() => {setView(AppView.CONTACT); setIsMenuOpen(false);}} className="w-full text-left p-6 text-xl font-black uppercase tracking-tighter text-slate-900 border-b border-slate-50">Contact Us</button>
          </div>

          <div className="mt-12 space-y-4">
             <button onClick={() => {setView(AppView.BOOKING); setIsMenuOpen(false);}} className="w-full py-6 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-sm shadow-xl">Book Appointment</button>
             <button onClick={() => {setView(AppView.REPORTS); setIsMenuOpen(false);}} className="w-full py-6 bg-white border border-slate-200 text-slate-900 rounded-3xl font-black uppercase tracking-[0.2em] text-sm">Download Reports</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;