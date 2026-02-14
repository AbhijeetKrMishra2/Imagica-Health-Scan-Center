
import React from 'react';

interface HeroProps {
  onBook: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBook }) => {
  return (
    <div className="relative overflow-hidden bg-white pb-20 pt-10 md:pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-900 text-white text-[11px] font-black uppercase tracking-[0.2em] mb-10 shadow-2xl shadow-blue-200">
            <span className="flex h-3 w-3 rounded-full bg-orange-500 animate-pulse"></span>
            BETTER ACCURACY • FASTER SERVICE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0a1428] leading-[1.1] mb-10 uppercase tracking-tighter">
            Where, <span className="text-blue-600">Best of Talents</span><br/>
            Meets <span className="text-orange-600">Best of Technologies</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed border-l-8 border-orange-500 pl-8">
            Dhanbad's premier diagnostic destination featuring <span className="text-blue-900 font-black">Philips Achieva 3 Tesla MRI</span> and <span className="text-blue-900 font-black">512 Slice CT Scan</span> technology. High-precision imaging for absolute diagnostic clarity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <button 
              onClick={onBook}
              className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-blue-200 transition transform hover:-translate-y-2"
            >
              Book Appointment
            </button>
            <button className="px-12 py-6 bg-white hover:bg-slate-50 text-[#0a1428] border-2 border-[#0a1428] rounded-3xl font-black text-sm uppercase tracking-[0.2em] transition">
              Explore Services
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-10">
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-600 text-2xl border border-slate-100 group-hover:scale-110 transition">🧠</div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">MRI<br/><span className="text-slate-900 text-sm font-black">3 Tesla</span></span>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-600 text-2xl border border-slate-100 group-hover:scale-110 transition">⚡</div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">CT Scan<br/><span className="text-slate-900 text-sm font-black">512 Slice</span></span>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-600 text-2xl border border-slate-100 group-hover:scale-110 transition">🩻</div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">X-Ray<br/><span className="text-slate-900 text-sm font-black">1000 mA</span></span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-2xl relative">
          <div className="absolute -inset-10 bg-orange-100 rounded-[5rem] -z-10 -rotate-2 opacity-50"></div>
          <div className="relative p-4 bg-white rounded-[4rem] shadow-2xl border-[16px] border-slate-50 overflow-hidden group">
            <div className="bg-slate-200 rounded-[3rem] w-full aspect-[4/3] flex items-center justify-center relative overflow-hidden">
               {/* Center Building Visual matching image 12 */}
               <div className="absolute inset-0 bg-[#0a1428] flex flex-col items-center justify-center text-center p-12">
                  <div className="w-32 h-32 bg-white rounded-full mb-8 flex items-center justify-center shadow-2xl animate-pulse">
                     <span className="text-6xl">🏥</span>
                  </div>
                  <p className="text-3xl font-black text-white uppercase tracking-tighter mb-2">IMAGICA HEALTH SCAN</p>
                  <p className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px]">Flagship Dhanbad Center</p>
               </div>
            </div>
            <div className="absolute top-12 left-12 bg-white/95 backdrop-blur-xl px-8 py-5 rounded-[2rem] shadow-3xl z-20 border border-slate-100">
              <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-1">State-of-the-Art</p>
              <p className="font-black text-blue-900 text-lg uppercase tracking-tight">Philips Achieve MRI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
