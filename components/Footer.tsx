
import React from 'react';
import { AppView } from '../types';
import { CONTACT_INFO } from '../constants';
import BrandLogo from './BrandLogo';

interface FooterProps {
  setView: (view: AppView) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView(AppView.HOME)}>
            <BrandLogo size="md" />
            <div>
              <span className="text-2xl font-black text-white block leading-none tracking-tighter">IMAGICA</span>
              <span className="text-[11px] uppercase text-slate-500 font-black tracking-[0.3em]">Health Scan</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            "Better Accuracy, Faster Service." Dhanbad's premier diagnostic hub equipped with 3 Tesla MRI and 512 Slice CT scan technology.
          </p>
          <div className="flex gap-4">
            {['𝕏', 'f', '📸', 'in'].map(s => (
              <span key={s} className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-lg font-black cursor-pointer hover:bg-blue-600 transition text-white hover:border-blue-500">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px] border-b border-slate-800 pb-4 inline-block">Patient Services</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-slate-400">
            <li className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group" onClick={() => setView(AppView.BOOKING)}>
               <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-3 transition-all"></span> Book a Scan
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group" onClick={() => setView(AppView.REPORTS)}>
               <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-3 transition-all"></span> Patient Reports
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group" onClick={() => setView(AppView.HEALTH_PACKAGES)}>
               <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-3 transition-all"></span> Health Packages
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group" onClick={() => setView(AppView.HOME_COLLECTION)}>
               <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-3 transition-all"></span> Home Collection
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group" onClick={() => setView(AppView.APOLLO_PARTNERSHIP)}>
               <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-3 transition-all"></span> Apollo Diagnostics
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px] border-b border-slate-800 pb-4 inline-block">Corporate Info</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-slate-400">
            <li className="hover:text-blue-400 transition cursor-pointer" onClick={() => setView(AppView.ABOUT)}>About Imagica</li>
            <li className="hover:text-blue-400 transition cursor-pointer" onClick={() => setView(AppView.INVESTORS)}>Investor Portal</li>
            <li className="hover:text-blue-400 transition cursor-pointer" onClick={() => setView(AppView.CAREERS)}>Life at Imagica</li>
            <li className="hover:text-blue-400 transition cursor-pointer" onClick={() => setView(AppView.COMPLIANCE)}>Quality Commitment</li>
            <li className="hover:text-blue-400 transition cursor-pointer" onClick={() => setView(AppView.CONTACT)}>Contact Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px] border-b border-slate-800 pb-4 inline-block">Main Imaging Hub</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-lg flex-shrink-0">📍</span>
              <span className="font-bold leading-relaxed">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-lg flex-shrink-0">📞</span>
              <span className="font-black text-lg tracking-tighter">{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-lg flex-shrink-0">✉️</span>
              <span className="font-bold lowercase text-blue-400">{CONTACT_INFO.email}</span>
            </li>
            <li className="pt-4 border-t border-slate-800">
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-1">Center Hours</p>
               <p className="text-xs font-black text-slate-200">7:30 AM – 7:00 PM (Daily)</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
        <div className="flex items-center gap-6">
          <p>&copy; 2024 IMAGICA HEALTH SCAN</p>
          <p className="hidden md:block">ISO 9001:2015 CERTIFIED</p>
        </div>
        <p className="text-center">Managed by Imagica Diagnostics Pvt. Ltd. | Dhanbad, Jharkhand</p>
      </div>
    </footer>
  );
};

export default Footer;
