
import React, { useState } from 'react';

const CareersSection: React.FC = () => {
  const [resumeSubmitted, setResumeSubmitted] = useState(false);

  const openRoles = [
    { title: 'Senior Radiologist', type: 'Full-time', location: 'Dhanbad', dept: 'Medical' },
    { title: 'Lab Technician', type: 'Full-time', location: 'Dhanbad', dept: 'Pathology' },
    { title: 'Patient Relations Officer', type: 'Full-time', location: 'Dhanbad', dept: 'Front Office' },
    { title: 'MRI Support Staff', type: 'Full-time', location: 'Dhanbad', dept: 'Radiology' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 px-4 bg-blue-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-12"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-orange-400 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Careers at Imagica</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-10">Join the Pulse of Innovation</h2>
          <p className="text-blue-200 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed italic">
            "Better Accuracy, Faster Service." Build your career with Dhanbad's most technologically advanced diagnostic team.
          </p>
        </div>
      </div>

      {/* Life at Imagica - Optimized grid for laptop (lg) screens */}
      <div className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
          <div className="space-y-12">
            <div>
              <h3 className="text-4xl lg:text-5xl font-black text-blue-900 uppercase tracking-tighter mb-8 underline decoration-orange-500 decoration-8 underline-offset-8">Life at Imagica</h3>
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed font-medium">
                We foster a culture of empathy and excellence. Our workplace is where diagnostic precision meets compassionate patient care, supported by the best tools in the industry.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { title: 'Cutting Edge Tech', desc: 'Work with the region\'s first 3 Tesla MRI and 512 Slice CT.', icon: '⚡' },
                { title: 'Expert Mentorship', desc: 'Direct learning from seasoned specialists and MD radiologists.', icon: '🧠' },
                { title: 'Patient Centric', desc: 'A culture built on ethical practices and patient empathy.', icon: '🤝' },
                { title: 'Career Growth', desc: 'Transparent career ladders with internal mobility paths.', icon: '📈' },
              ].map((item, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="text-4xl group-hover:scale-125 transition duration-500">{item.icon}</div>
                  <h4 className="font-black text-blue-900 uppercase text-sm tracking-widest">{item.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-8 bg-slate-50 rounded-[4rem] -z-10 group-hover:rotate-2 transition duration-700"></div>
            <div className="bg-slate-200 aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-slate-400 font-black relative">
               <span className="text-7xl mb-4">👥</span>
               <p className="uppercase tracking-[0.4em] text-xs">Innovation Culture</p>
               <div className="absolute bottom-8 right-8 bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl">Team Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Roles */}
      <div className="bg-slate-50 py-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-black text-blue-900 uppercase tracking-tighter mb-4">Current Opportunities</h3>
            <p className="text-slate-500 font-medium text-lg">Help us redefine diagnostics in Jharkhand.</p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-500">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-4">
                    <h4 className="font-black text-2xl text-slate-900 uppercase tracking-tight">{role.title}</h4>
                    <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{role.dept}</span>
                  </div>
                  <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                    <span>📍 {role.location}</span>
                    <span>⏰ {role.type}</span>
                  </div>
                </div>
                <button className="px-10 py-5 bg-blue-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-600 shadow-xl shadow-blue-100 transition transform hover:-translate-x-2">
                  View & Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Upload Section */}
      <div className="py-24 md:py-32 px-4 max-w-5xl mx-auto">
        <div className="bg-blue-900 rounded-[4rem] p-12 md:p-20 text-center text-white shadow-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-indigo-950 opacity-50"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">General Application</h3>
            <p className="text-blue-200 mb-12 font-medium text-lg lg:text-xl max-w-2xl mx-auto">Don't see a matching role? Send your resume and we'll keep you in mind for future opportunities.</p>
            
            {resumeSubmitted ? (
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 animate-fade-in">
                <p className="text-3xl font-black uppercase tracking-tight mb-4">Application Received! 📄</p>
                <p className="text-blue-300 text-sm font-bold uppercase tracking-widest">We will notify you of upcoming medical vacancies.</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-8">
                 <div className="w-full max-w-lg">
                    <label className="block w-full border-4 border-dashed border-blue-400/30 rounded-[3rem] p-14 cursor-pointer hover:border-blue-400 hover:bg-white/5 transition duration-500 group">
                       <input type="file" className="hidden" onChange={() => setResumeSubmitted(true)} />
                       <div className="text-6xl mb-6 group-hover:scale-110 transition duration-500 transform">📁</div>
                       <span className="block font-black uppercase tracking-[0.3em] text-sm mb-2">Upload CV / Portfolio</span>
                       <span className="block text-xs text-blue-400 font-bold italic">Supports PDF, DOCX (Max 5MB)</span>
                    </label>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersSection;
