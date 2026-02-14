
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingModule from './components/BookingModule';
import ReportPortal from './components/ReportPortal';
import InvestorSection from './components/InvestorSection';
import CenterLocator from './components/CenterLocator';
import ProtocolEngine from './components/ProtocolEngine';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { AppView } from './types';
import { EXPERTS, EQUIPMENTS, SERVICES_LIST, TESTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case AppView.BOOKING:
        return <BookingModule onBack={() => setCurrentView(AppView.HOME)} />;
      case AppView.REPORTS:
        return <ReportPortal onBack={() => setCurrentView(AppView.HOME)} />;
      case AppView.INVESTORS:
        return <InvestorSection />;
      case AppView.HEALTH_PACKAGES:
        return (
          <div className="py-20 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Preventive Wellness</span>
                <h1 className="text-4xl md:text-6xl font-black text-blue-900 uppercase tracking-tighter mb-8">Health Packages</h1>
                <p className="text-slate-600 text-lg max-w-3xl mx-auto font-medium">
                  Investing in preventive screening today ensures a healthier tomorrow. Explore our curated diagnostic panels designed for every age group.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {TESTS.map((test) => (
                  <div key={test.id} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition duration-500 group flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">{test.category}</span>
                        <p className="text-3xl font-black text-blue-900">₹{test.price}</p>
                      </div>
                      <h3 className="text-2xl font-black text-[#0a1428] uppercase tracking-tight mb-4">{test.name}</h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">{test.description}</p>
                    </div>
                    <button 
                      onClick={() => setCurrentView(AppView.BOOKING)}
                      className="w-full py-5 bg-[#0a1428] text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition shadow-lg"
                    >
                      Select Package
                    </button>
                  </div>
                ))}
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-[3rem] p-10 text-white shadow-2xl flex flex-col justify-center items-center text-center">
                   <p className="text-4xl mb-6">✨</p>
                   <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Custom Corporate Panels</h3>
                   <p className="text-amber-50 text-sm font-medium mb-8">Looking for customized employee health checkups for your firm?</p>
                   <button onClick={() => setCurrentView(AppView.CONTACT)} className="px-8 py-4 bg-white text-amber-600 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl">Inquire Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      case AppView.HOME_COLLECTION:
        return (
          <div className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
                <div className="lg:w-1/2 space-y-10">
                  <span className="inline-block px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-emerald-100">Care at Your Doorstep</span>
                  <h1 className="text-5xl md:text-7xl font-black text-[#0a1428] uppercase tracking-tighter leading-none">Home Sample Collection</h1>
                  <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                    Avoid travel and queues. Our certified phlebologists follow strict safety protocols to collect your blood and urine samples from the comfort of your home.
                  </p>
                  <div className="flex gap-4">
                     <button onClick={() => setCurrentView(AppView.BOOKING)} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-blue-700 transition">Schedule Visit</button>
                     <button className="px-10 py-5 bg-slate-50 text-slate-800 rounded-2xl font-black uppercase text-xs tracking-[0.2em] border border-slate-200">How it Works</button>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                  {[
                    { label: 'Sterilized Kits', icon: '💉' },
                    { label: 'Fast Transit', icon: '🚚' },
                    { label: 'Digital Reports', icon: '📱' },
                    { label: 'Certified Staff', icon: '👤' }
                  ].map(item => (
                    <div key={item.label} className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 text-center hover:bg-emerald-50 hover:border-emerald-200 transition duration-500">
                      <p className="text-4xl mb-4">{item.icon}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case AppView.APOLLO_PARTNERSHIP:
        return (
          <div className="py-20 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12">
                   <div className="md:w-2/3">
                      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">Apollo Diagnostics Partnership</h1>
                      <p className="text-blue-200 text-lg md:text-xl font-medium leading-relaxed">
                        Imagica Health Scan is proud to be the exclusive strategic partner for Apollo Diagnostics in Dhanbad. We combine local clinical expertise with Apollo's world-class laboratory standards.
                      </p>
                   </div>
                   <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center p-6 shadow-2xl">
                      <div className="text-center">
                        <p className="text-red-600 font-black text-2xl uppercase tracking-tighter">Apollo</p>
                        <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Diagnostics</p>
                      </div>
                   </div>
                </div>
                <div className="p-12 md:p-20">
                   <div className="grid md:grid-cols-3 gap-12">
                      <div className="space-y-6">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl">🔬</div>
                        <h4 className="text-xl font-black text-blue-900 uppercase">Global Test Menu</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">Access over 3,500+ specialized tests ranging from basic wellness to advanced genetic sequencing.</p>
                      </div>
                      <div className="space-y-6">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl">🌍</div>
                        <h4 className="text-xl font-black text-blue-900 uppercase">International QC</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">Daily quality control monitored by Apollo's central pathology hub ensuring 99.9% accuracy.</p>
                      </div>
                      <div className="space-y-6">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl">🛡️</div>
                        <h4 className="text-xl font-black text-blue-900 uppercase">Trusted by Millions</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">Leveraging India's most trusted healthcare brand to deliver diagnostic confidence.</p>
                      </div>
                   </div>
                   <div className="mt-20 pt-16 border-t border-slate-100 text-center">
                      <button onClick={() => setCurrentView(AppView.BOOKING)} className="px-12 py-6 bg-red-600 text-white rounded-[2rem] font-black uppercase text-sm tracking-widest hover:bg-red-700 shadow-2xl transition transform hover:-translate-y-1">Book an Apollo Test</button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      case AppView.GOVERNANCE:
        return (
          <div className="py-20 px-4 bg-gradient-to-b from-amber-500 via-amber-600 to-amber-700 text-[#0a1428]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <span className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-4 block bg-[#0a1428]/20 px-4 py-2 rounded-full w-max mx-auto border border-white/20">Regulatory Framework</span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white drop-shadow-lg">Corporate Governance</h1>
                <p className="text-amber-50 text-lg md:text-xl max-w-3xl mx-auto font-medium">
                  At Imagica Health Scan, our governance framework ensures ethical conduct, board accountability, and rigorous compliance with India's Companies Act 2013.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {[
                  { title: "Board Composition", text: "Multi-disciplinary board comprising 60% independent MD specialists and 40% strategic executive leadership.", icon: "🏛️" },
                  { title: "Audit & Risk", text: "Quarterly internal and external audits conducted to ensure financial integrity and radiation safety compliance.", icon: "🛡️" },
                  { title: "Code of Ethics", text: "Strict adherence to medical ethics including patient data privacy (HIPAA-style) and transparent billing.", icon: "⚖️" },
                  { title: "Stakeholder Policy", text: "Prioritizing long-term value through transparent quarterly reporting and open board resolutions.", icon: "🤝" },
                  { title: "Grievance Mechanism", text: "Internal ombudsman for clinical and corporate whistleblowing to maintain platform integrity.", icon: "📣" },
                  { title: "Sustainability", text: "Environmental governance focused on safe biomedical waste disposal and radiation leakage monitoring.", icon: "🌱" }
                ].map((item, i) => (
                  <div key={i} className="p-10 rounded-[3rem] bg-white shadow-2xl border border-amber-400/30 hover:bg-amber-50 transition-all group">
                    <div className="text-4xl mb-6 group-hover:scale-110 transition duration-500">{item.icon}</div>
                    <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#0a1428]">{item.title}</h3>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case AppView.SHAREHOLDERS:
        return (
          <div className="py-20 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
                <div className="lg:w-1/2">
                  <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Equity Administration</span>
                  <h1 className="text-5xl md:text-7xl font-black text-[#0a1428] uppercase tracking-tighter leading-none mb-10">Shareholder Services</h1>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
                    We are dedicated to providing seamless service to our valued investors. Access share transfer protocols, dividend tracking, and registrar information below.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 shadow-xl transition">Query Support</button>
                    <button className="px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition">FAQ Portal</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case AppView.LOCATIONS:
        return <CenterLocator />;
      case AppView.CAREERS:
        return <CareersSection />;
      case AppView.CONTACT:
        return <ContactSection />;
      case AppView.LEADERSHIP:
        return (
          <div className="py-20 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Medical Board</span>
                <h1 className="text-4xl md:text-6xl font-black text-[#0a1428] uppercase tracking-tighter mb-8">Our Experts</h1>
                <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto font-medium">
                  Where, Best of Talents Meets Best of Technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
                {EXPERTS.map((expert, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -rotate-45 translate-x-10 -translate-y-10 rounded-full group-hover:bg-orange-600/5 transition duration-500"></div>
                    
                    <div className="w-32 h-32 md:w-44 md:h-44 bg-slate-100 rounded-full flex-shrink-0 border-4 border-slate-50 flex items-center justify-center text-5xl shadow-inner relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
                       {expert.image}
                    </div>
                    
                    <div className="flex-grow text-center md:text-left">
                      <div className="mb-4">
                        <h3 className="text-2xl font-black text-[#0a1428] uppercase tracking-tight">{expert.name}</h3>
                        <p className="text-xs font-black text-orange-600 uppercase tracking-widest">{expert.title}</p>
                      </div>
                      <div className="h-px w-20 bg-blue-600/20 mb-4 mx-auto md:mx-0"></div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-tight leading-loose mb-2">{expert.qualifications}</p>
                      <span className="inline-block text-[9px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {expert.specialty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case AppView.COMPLIANCE:
        return (
          <div className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              {/* Quality Hero */}
              <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
                <div className="lg:w-1/2 space-y-10">
                  <div className="inline-block px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-blue-100">
                    Clinical Integrity Protocol
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black text-[#0a1428] uppercase tracking-tighter leading-none">Quality & Compliance</h1>
                  <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-orange-500 pl-6">
                    "Diagnostic precision is not just our goal; it is our foundation. Every report that leaves Imagica Health Scan represents a commitment to patient safety and clinical excellence."
                  </p>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                  <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 text-center shadow-sm">
                    <p className="text-4xl mb-4">📜</p>
                    <p className="text-xs font-black uppercase text-slate-900 tracking-widest mb-1">ISO 9001:2015</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Certified Quality Management</p>
                  </div>
                  <div className="p-10 bg-[#0a1428] rounded-[3rem] text-white text-center shadow-xl">
                    <p className="text-4xl mb-4">🔬</p>
                    <p className="text-xs font-black uppercase tracking-widest mb-1">NABL Standards</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Accredited Lab Services</p>
                  </div>
                  <div className="p-10 bg-blue-600 rounded-[3rem] text-white text-center shadow-lg">
                    <p className="text-4xl mb-4">🛡️</p>
                    <p className="text-xs font-black uppercase tracking-widest mb-1">Radiation Safety</p>
                    <p className="text-[9px] font-bold text-blue-100 uppercase">AERB Compliant Hub</p>
                  </div>
                  <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 text-center shadow-sm">
                    <p className="text-4xl mb-4">⚖️</p>
                    <p className="text-xs font-black uppercase text-slate-900 tracking-widest mb-1">HIPAA Protocol</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Data Security & Privacy</p>
                  </div>
                </div>
              </div>

              {/* Pillars of Quality */}
              <div className="space-y-32">
                <section>
                   <div className="flex items-center gap-6 mb-16">
                      <div className="h-0.5 flex-grow bg-slate-100"></div>
                      <h2 className="text-3xl font-black text-blue-900 uppercase tracking-[0.2em] whitespace-nowrap">The Pillars of Accuracy</h2>
                      <div className="h-0.5 flex-grow bg-slate-100"></div>
                   </div>
                   <div className="grid lg:grid-cols-3 gap-12">
                      {[
                        { title: 'Technical Precision', text: 'Daily calibration of Philips 3T MRI and 512 Slice CT scan using AI-driven internal QC modules to ensure zero-drift imaging.', icon: '⚡' },
                        { title: 'Double Blind Review', text: 'Critical diagnostic reports undergo a secondary review by senior sub-specialist radiologists to eliminate observational bias.', icon: '👁️' },
                        { title: 'ALARA Protocol', text: 'As Low As Reasonably Achievable: We employ dose-reduction technologies in our CT systems to minimize radiation exposure.', icon: '☢️' }
                      ].map((pillar, i) => (
                        <div key={i} className="relative group p-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-all duration-500">
                           <div className="text-5xl mb-8">{pillar.icon}</div>
                           <h3 className="text-xl font-black text-[#0a1428] uppercase tracking-tight mb-4">{pillar.title}</h3>
                           <p className="text-slate-500 text-sm font-medium leading-relaxed">{pillar.text}</p>
                        </div>
                      ))}
                   </div>
                </section>

                <section className="bg-slate-50 rounded-[5rem] p-12 md:p-20 border border-slate-100">
                   <div className="flex flex-col lg:flex-row gap-20 items-center">
                      <div className="lg:w-1/2">
                         <h2 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter mb-8 leading-none">Diagnostic Integrity Timeline</h2>
                         <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                           Our workflow is designed with multiple checkpoints to ensure every diagnosis is backed by validated data and expert analysis.
                         </p>
                         <ul className="space-y-6">
                            {[
                              { step: '01', title: 'Barcoded Sampling', text: 'Eliminating manual errors through end-to-end barcode tracking.' },
                              { step: '02', title: 'Real-time Processing', text: 'Immediate analysis in our fully automated pathology lab.' },
                              { step: '03', title: 'Consultant Authorization', text: 'Final report validation by certified MD Specialists only.' }
                            ].map(t => (
                              <li key={t.step} className="flex gap-6 items-start">
                                 <span className="text-2xl font-black text-orange-500 opacity-30">{t.step}</span>
                                 <div>
                                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">{t.title}</h4>
                                    <p className="text-slate-400 text-xs font-medium">{t.text}</p>
                                 </div>
                              </li>
                            ))}
                         </ul>
                      </div>
                      <div className="lg:w-1/2 w-full h-80 bg-white rounded-[4rem] shadow-inner flex items-center justify-center text-8xl grayscale opacity-10">
                         🛡️
                      </div>
                   </div>
                </section>
              </div>
            </div>
          </div>
        );
      case AppView.ABOUT:
        return (
          <div className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Director's Profile</span>
              <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-4 md:mb-6 uppercase tracking-tighter">Director's Message</h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic">
                "Together we can and we will make a difference. Better Accuracy, Faster Service."
              </p>
            </div>

            <div className="bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 mb-20 overflow-hidden relative">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-[40%] relative bg-white overflow-hidden p-10 lg:p-16 flex flex-col items-center">
                  <div className="absolute top-0 right-0 w-full h-[60%] bg-blue-900 -z-10 rounded-bl-[15rem]"></div>
                  <div className="absolute top-0 right-0 w-full h-[55%] bg-red-600 -z-20 rounded-bl-[15rem] translate-x-4 -translate-y-4"></div>
                  
                  <div className="w-64 h-64 lg:w-80 lg:h-80 bg-slate-200 rounded-[3rem] shadow-2xl relative overflow-hidden border-[10px] border-white group">
                    <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center text-7xl">👨‍⚕️</div>
                    <div className="absolute bottom-0 left-0 w-full bg-blue-900/90 py-4 text-center">
                      <p className="text-white font-black text-sm uppercase tracking-widest">Dr. Mihir Kumar Jha</p>
                      <p className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mt-1">(Director)</p>
                    </div>
                  </div>
                  
                  <div className="mt-12 text-center lg:text-left space-y-4">
                     <h3 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">DR. MIHIR KUMAR JHA</h3>
                     <p className="text-sm font-black text-slate-500 uppercase tracking-widest leading-loose">
                       MBBS (CMC, Kolkata)<br/>MD, Radiology (IPGME & R Kolkata)<br/>FRCR - II A (London)<br/>Consultant (Radiology & Imaging)
                     </p>
                  </div>
                </div>
                
                <div className="lg:w-[60%] p-8 md:p-12 lg:p-20 bg-white">
                  <div className="prose prose-lg text-slate-700 leading-relaxed font-medium">
                    <p className="mb-6">
                      My Professional Journey Started with a passion for excellence in high quality diagnostic. In the initial days of my carrier, I acknowledged that precise and timely diagnosis can indeed save life. This thought affixed deep in my heart and the constant urge to serve people heightened in the years passing by.
                    </p>
                    <p className="mb-6">
                      With this in my mind I started <span className="text-blue-600 font-black">Imagica Health Scan</span> to offer high quality diagnostic service in patient centric manner. I feel every patient deserves a final diagnosis, whatever may be the outcome.
                    </p>
                    <p className="mb-6">
                      With this in mind, we have also started all kind of guided core biopsy for histo pathological correlation. It gives me great pleasure to inform you that apart from all common imaging modalities we have started <span className="text-red-600 font-black italic">CT Coronary Angiography first time in Dhanbad</span> a emerging new dimension of Radiology, i.e Preventive Radiology.
                    </p>
                    <p className="mb-6 font-bold italic border-l-4 border-blue-600 pl-6 text-blue-900">
                      We are trying our best to make our team give best of services to patient, by making their stay comfortable and short in our premises in the line of our moto "Better Accuracy, Faster Service."
                    </p>
                    <p className="mb-10">
                      Last, but not the least we would like to thank you all for your support and blessings in our long journey of service to humanity.
                    </p>
                    
                    <div className="pt-10 border-t border-slate-100 flex justify-between items-end">
                      <div>
                        <p className="font-black text-xl text-slate-900">Regards</p>
                        <p className="text-blue-900 font-black text-2xl lg:text-3xl mt-1 uppercase">Dr. M. K. Jha</p>
                      </div>
                      <p className="text-xl lg:text-2xl font-black text-orange-600 italic">"Together we can and we will make a difference"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero onBook={() => setCurrentView(AppView.BOOKING)} />
            <div className="bg-white py-16 md:py-24 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                   <div className="inline-flex gap-4 mb-6">
                      {['MRI (3 Tesla)', 'CT Scan (512 Slice)', 'Cardiac CT & MRI', 'Guided True Cut Biopsies'].map(tag => (
                        <div key={tag} className="px-4 py-2 bg-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 border border-slate-200 shadow-sm">{tag}</div>
                      ))}
                   </div>
                   <h2 className="text-4xl md:text-6xl font-black text-blue-900 uppercase tracking-tighter mb-4">Our Services</h2>
                   <div className="w-32 h-2 bg-blue-900 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES_LIST.map((service, idx) => (
                      <div key={idx} className="relative group">
                        <div className={`py-4 px-6 rounded-r-full shadow-sm ${service.color} text-white font-black text-sm uppercase tracking-wider transition group-hover:translate-x-2`}>
                          {service.name}
                        </div>
                        <div className={`absolute top-0 left-0 w-1.5 h-full ${service.color} brightness-75 rounded-full`}></div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-10">
                    <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic border-l-8 border-blue-900 pl-8">
                      "We offer a comprehensive range of diagnostic services aimed at accurately assessing and identifying various medical conditions. Our highly skilled team of professionals and latest technology enable us to deliver precise and reliable diagnostic results."
                    </p>
                    <div className="space-y-4">
                      {['All Diagnostic Services Under One Roof', 'Free Ambulance Services', 'Extended Service Hours (8 Am to 8 Pm)'].map((txt, i) => (
                        <div key={i} className="flex items-center gap-4 text-blue-900 font-black uppercase tracking-tight text-sm">
                          <span className="text-xl">▷</span> {txt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 py-24 px-4">
               <div className="max-w-7xl mx-auto">
                 <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden">
                    <div className="bg-blue-900 p-10 text-center">
                       <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">CANCER SCREENING HEAD TO TOE</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center p-12 lg:p-20 gap-16">
                       <div className="lg:w-1/3 text-center space-y-8">
                          <div className="bg-blue-50 rounded-full w-48 h-48 mx-auto flex items-center justify-center text-8xl shadow-inner">👤</div>
                          <div className="space-y-4">
                             {['MRI Brain / CT Brain', 'Neck: USG Thyroid', 'Chest X-Ray / HRCT Thorax', 'Sonomammography', 'USG Abdomen', 'MRI Prostate'].map(t => (
                               <p key={t} className="text-xs font-black uppercase tracking-widest text-slate-500 pb-2 border-b border-slate-100">{t}</p>
                             ))}
                          </div>
                       </div>
                       <div className="lg:w-2/3 space-y-8">
                          <h3 className="text-3xl font-black text-blue-900 uppercase tracking-tight">Cancer Screening Imaging Package</h3>
                          <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            CANCER IS A DEVASTATING DISEASE THAT AFFECTS MILLIONS OF PEOPLE WORLDWIDE. PREVENTIVE CANCER SCREENING IS AN IMPORTANT STEP IN DETECTING CANCER EARLY, WHEN IT IS MOST TREATABLE.
                          </p>
                          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                             <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Included Blood Markers</p>
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['CEA', 'CA-125', 'PSA', 'Serum LDH'].map(m => (
                                  <div key={m} className="bg-white p-3 rounded-xl border border-blue-200 text-center">
                                    <span className="font-black text-blue-900 uppercase tracking-widest">{m}</span>
                                  </div>
                                ))}
                             </div>
                          </div>
                          <button onClick={() => setCurrentView(AppView.BOOKING)} className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl transition-all">Check Package Pricing</button>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            <ProtocolEngine />
            <CenterLocator />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow pt-24 md:pt-36">
        {renderContent()}
      </main>
      <Footer setView={setCurrentView} />
      
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-3 z-50 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.15)]">
        <button onClick={() => setCurrentView(AppView.HOME)} className={`flex flex-col items-center gap-1.5 p-2 ${currentView === AppView.HOME ? 'text-blue-600' : 'text-slate-400'}`}>
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-black uppercase">Home</span>
        </button>
        <button onClick={() => setCurrentView(AppView.BOOKING)} className={`flex flex-col items-center gap-1.5 p-2 ${currentView === AppView.BOOKING ? 'text-blue-600' : 'text-slate-400'}`}>
          <span className="text-xl">📅</span>
          <span className="text-[10px] font-black uppercase">Book</span>
        </button>
        <button onClick={() => setCurrentView(AppView.REPORTS)} className={`flex flex-col items-center gap-1.5 p-2 ${currentView === AppView.REPORTS ? 'text-blue-600' : 'text-slate-400'}`}>
          <span className="text-xl">📄</span>
          <span className="text-[10px] font-black uppercase">Reports</span>
        </button>
      </div>
    </div>
  );
};

export default App;
