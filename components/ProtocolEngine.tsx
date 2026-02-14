
import React, { useState } from 'react';
import { fetchProtocolMapping } from '../diagnosticRegistry';

// Removed conflicting local declaration of Window.aistudio as it is already defined globally.

const ProtocolEngine: React.FC = () => {
  const [intakeData, setIntakeData] = useState('');
  const [mappingResult, setMappingResult] = useState<string | null>(null);
  const [isQuerying, setIsQuerying] = useState(false);

  const executeMapping = async () => {
    if (!intakeData.trim()) return;

    // Check if an authenticated API key is selected from the web portal
    // Using type casting to safely access aistudio which is globally defined in the environment.
    const aistudio = (window as any).aistudio;
    if (aistudio) {
      const hasKey = await aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await aistudio.openSelectKey();
        // Proceeding after triggering openSelectKey assumes success per guidelines
      }
    }

    setIsQuerying(true);
    setMappingResult(null); // Clear previous results
    
    try {
      const result = await fetchProtocolMapping(intakeData);
      setMappingResult(result);
    } catch (err) {
      setMappingResult("Communication link error with the central diagnostic database.");
    } finally {
      setIsQuerying(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-amber-400 to-amber-600 py-24 px-4 text-[#0a1428] relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="flex-grow">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex h-3 w-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse"></span>
              <span className="text-[10px] font-black text-amber-50 uppercase tracking-[0.4em]">Secure Web-Auth Interface v5.0</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 text-white drop-shadow-md">Diagnostic Mapping Engine</h2>
            <p className="text-amber-50 text-lg max-w-2xl font-medium border-l border-white/30 pl-6">
              Automated clinical cross-referencing requiring user-authenticated secure session.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="px-6 py-4 bg-white/20 border border-white/30 rounded-2xl text-center backdrop-blur-md">
              <p className="text-[9px] font-black text-amber-100 uppercase mb-1">Auth Status</p>
              <p className="text-xs font-bold text-white uppercase">WEB-KEY ACTIVE</p>
            </div>
            <button 
              onClick={() => (window as any).aistudio?.openSelectKey()}
              className="px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl text-center backdrop-blur-md transition group"
            >
              <p className="text-[9px] font-black text-amber-100 uppercase mb-1">Key Management</p>
              <p className="text-xs font-bold text-white group-hover:text-amber-200">RE-AUTHENTICATE</p>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[3.5rem] p-8 md:p-14 border border-amber-300 shadow-3xl">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600 ml-4">Patient Observations / Intake Summary</label>
              <div className="relative">
                <textarea 
                  placeholder="Input detailed patient symptoms, clinical observations, or previous test results for mapping..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] p-8 text-[#0a1428] placeholder-slate-400 outline-none focus:border-amber-500 focus:bg-white transition font-medium min-h-[180px] resize-none shadow-inner text-lg"
                  value={intakeData}
                  onChange={(e) => setIntakeData(e.target.value)}
                />
                <div className="absolute bottom-6 right-8 text-[10px] font-bold text-slate-300 uppercase tracking-widest">Secure Input Field</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-xs text-slate-400 font-medium italic">
                Data is processed using your selected authenticated API credentials.
              </p>
              <button 
                onClick={executeMapping}
                disabled={isQuerying}
                className="bg-amber-600 hover:bg-amber-500 disabled:bg-slate-300 text-white font-black px-16 py-7 rounded-2xl transition-all shadow-[0_15px_40px_-10px_rgba(217,119,6,0.4)] uppercase text-[11px] tracking-[0.2em] flex items-center gap-4 group"
              >
                {isQuerying ? (
                  <>
                    <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                    Querying Registry...
                  </>
                ) : (
                  <>
                    Resolve Protocol
                    <span className="group-hover:translate-x-2 transition">→</span>
                  </>
                )}
              </button>
            </div>

            {mappingResult && (
              <div className="mt-10 bg-amber-50 rounded-[2.5rem] p-10 border border-amber-100 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-amber-200 gap-4">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-3xl border border-amber-200 shadow-sm">📋</div>
                    <div>
                      <h4 className="font-black text-[#0a1428] uppercase text-base tracking-widest">Registry Mapping Output</h4>
                      <p className="text-[10px] text-amber-600 font-black uppercase tracking-[0.3em] mt-1">Auth-Session ID: {Math.floor(Date.now() / 100000)}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-5 py-2 rounded-xl bg-white text-[9px] font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 border border-slate-200 transition">Save Log</button>
                    <button className="px-5 py-2 rounded-xl bg-amber-600 text-[9px] font-black text-white uppercase tracking-widest hover:bg-amber-500 transition shadow-lg">Print Protocol</button>
                  </div>
                </div>
                <div className="text-slate-700 leading-relaxed font-medium text-xl whitespace-pre-wrap max-w-4xl">
                  {mappingResult}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-14 max-w-3xl mx-auto">
           <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-center">
              <p className="text-[10px] text-amber-50 uppercase tracking-widest font-black leading-loose">
                <span className="text-white">Authenticated Usage:</span> This session utilizes your personal API key from <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline decoration-amber-200">paid GCP projects</a>. Billing is handled directly through your account. Imagica Health Scan does not store or see your private keys.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolEngine;
