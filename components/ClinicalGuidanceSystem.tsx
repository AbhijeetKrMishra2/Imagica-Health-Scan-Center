
import React, { useState } from 'react';
import { getProtocolMapping } from '../clinicalProtocolService';

const ClinicalGuidanceSystem: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [protocolResult, setProtocolResult] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const resolveProtocol = async () => {
    if (!userInput.trim()) return;
    setIsProcessing(true);
    try {
      const mapping = await getProtocolMapping(userInput);
      setProtocolResult(mapping);
    } catch (err) {
      setProtocolResult("System timeout. Please contact internal technical support.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-slate-950 py-24 px-4 text-white relative">
      {/* Decorative Scanner Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500/30"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <span className="bg-blue-600/10 text-blue-400 px-5 py-1.5 rounded-full text-[9px] font-black tracking-[0.4em] uppercase border border-blue-500/20 mb-6 inline-block">
              Proprietary Diagnostic Mapping
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Clinical Protocol Resolver</h2>
            <p className="text-slate-500 text-lg max-w-xl font-medium">Cross-reference symptoms with our comprehensive radiology and pathology database for precise screening identification.</p>
          </div>
          
          <div className="hidden lg:flex gap-4">
             <div className="w-16 h-16 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-blue-500">v4.2</span>
                <span className="text-[8px] uppercase font-bold text-slate-500">CORE</span>
             </div>
             <div className="w-16 h-16 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-orange-500">DB</span>
                <span className="text-[8px] uppercase font-bold text-slate-500">SYNC</span>
             </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 border border-white/10 shadow-3xl">
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            <div className="relative flex-grow">
              <textarea 
                placeholder="Enter clinical observations or patient symptoms for protocol matching..."
                className="w-full bg-black/40 border border-white/10 rounded-3xl p-8 text-white placeholder-slate-600 outline-none focus:border-blue-500/50 transition font-medium min-h-[120px] resize-none shadow-inner"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </div>
            <button 
              onClick={resolveProtocol}
              disabled={isProcessing}
              className="bg-blue-700 hover:bg-blue-600 disabled:bg-slate-800 text-white font-black px-12 py-8 rounded-3xl transition-all shadow-2xl uppercase text-[11px] tracking-[0.2em] self-center lg:self-stretch flex items-center justify-center min-w-[220px]"
            >
              {isProcessing ? 'Mapping Protocols...' : 'Generate Protocol Map'}
            </button>
          </div>

          {protocolResult && (
            <div className="bg-black/20 rounded-[2.5rem] p-10 border border-white/5 animate-fade-in">
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-2xl border border-blue-500/20">🧬</div>
                  <div>
                    <h4 className="font-black text-white uppercase text-sm tracking-widest">Protocol Resolution Summary</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Imagica Health Scan Proprietary Algorithm v4.2.0</p>
                  </div>
                </div>
                <button className="text-[10px] font-black text-slate-500 uppercase hover:text-white transition">Print Result</button>
              </div>
              <div className="text-slate-300 leading-relaxed font-medium text-lg prose prose-invert max-w-none whitespace-pre-wrap">
                {protocolResult}
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-[11px] text-slate-600 uppercase tracking-widest font-black max-w-3xl mx-auto leading-relaxed">
             Regulatory Compliance: This clinical mapping utility is an internal data-retrieval system for administrative screening support. It does not replace professional clinical judgment or physical examination. Verification by an MD Radiologist is required.
           </p>
        </div>
      </div>
    </div>
  );
};

export default ClinicalGuidanceSystem;
