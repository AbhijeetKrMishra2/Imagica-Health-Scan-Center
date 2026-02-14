
import React from 'react';
import { CONTACT_INFO } from '../constants';

const CenterLocator: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24 px-4" id="location">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-2 block">Dhanbad Flagship Center</span>
              <h2 className="text-5xl font-black text-blue-900 uppercase tracking-tighter leading-none">IMAGICA HEALTH SCAN</h2>
              <div className="h-1.5 w-32 bg-orange-500 rounded-full"></div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-8 items-start group">
                <div className="w-20 h-20 bg-blue-900 rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl shadow-blue-200 text-white flex-shrink-0 group-hover:scale-110 transition">📍</div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 mb-2 uppercase tracking-tight">Main Address</h4>
                  <p className="text-slate-600 font-bold leading-relaxed text-xl max-w-sm">
                    Sri Ram Vatika, Barwadda Road, Dhaiya Dhanbad, 826001
                  </p>
                  <button className="text-blue-600 font-black mt-4 uppercase tracking-[0.2em] text-[10px] hover:underline flex items-center gap-2 group/btn">
                    Open in Google Maps 
                    <span className="group-hover/btn:translate-x-2 transition">→</span>
                  </button>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-20 h-20 bg-orange-500 rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl shadow-orange-100 text-white flex-shrink-0 group-hover:scale-110 transition">📞</div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 mb-2 uppercase tracking-tight">Connect With Us</h4>
                  <p className="text-slate-800 font-black text-2xl tracking-tighter">{CONTACT_INFO.phone}</p>
                  <p className="text-blue-600 font-bold mt-1 lowercase">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl shadow-slate-200 text-white flex-shrink-0 group-hover:scale-110 transition">⏰</div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 mb-2 uppercase tracking-tight">Diagnostic Timings</h4>
                  <p className="text-slate-800 font-black text-2xl uppercase tracking-tighter">7:30 AM – 7:00 PM</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Open Monday – Sunday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-[4rem] -z-10 group-hover:rotate-3 transition duration-700"></div>
            <div className="h-[600px] bg-white rounded-[3.5rem] overflow-hidden shadow-2xl relative border-[12px] border-white ring-1 ring-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.11!2d86.42!3d23.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f69168925345d1%3A0xe54924c55355608b!2sImagica%20Health%20Scan!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Location Map"
                className="grayscale opacity-90 contrast-125"
              ></iframe>
              <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md px-8 py-4 rounded-3xl shadow-2xl border border-white/20 text-center">
                 <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest mb-1">Scan To Direct</p>
                 <div className="w-16 h-16 bg-slate-100 mx-auto rounded-xl flex items-center justify-center text-3xl">📱</div>
              </div>
              <div className="absolute bottom-10 left-10 bg-blue-900 text-white px-10 py-5 rounded-[2.5rem] shadow-2xl font-black text-xs uppercase tracking-[0.2em]">
                 Find Us Near Dhaiya
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterLocator;
