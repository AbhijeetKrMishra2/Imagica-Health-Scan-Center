
import React, { useState } from 'react';
import { getHealthAdvice } from '../geminiService';

const DiagnosticGuidance: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const result = await getHealthAdvice(query);
      setAdvice(result);
    } catch (err) {
      setAdvice("A system communication error occurred. Please refresh or contact technical support.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 py-24 px-4 text-white relative overflow-hidden">
      {/* Background decoration to feel more "custom medical system" */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="bg-blue-500/10 text-blue-400 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border border-blue-500/20 mb-6 inline-block">
            Clinical Insight Protocol
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Diagnostic Selection Engine</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">Utilize our advanced medical database to identify the precise screening protocols for your specific health symptoms.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-3xl">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-grow">
              <input 
                type="text"
                placeholder="Describe specific symptoms or health concerns for clinical mapping..."
                className="w-full bg-slate-800/50 border border-white/10 rounded-2xl p-6 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500 transition font-medium"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
              />
            </div>
            <button 
              onClick={handleAsk}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-black px-12 py-6 rounded-2xl transition shadow-2xl whitespace-nowrap uppercase text-xs tracking-widest"
            >
              {loading ? 'Processing Database...' : 'Run Clinical Mapping'}
            </button>
          </div>

          {advice && (
            <div className="bg-slate-800/40 rounded-[2rem] p-8 border border-white/5 animate-fade-in">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-xl border border-blue-500/20">🏥</div>
                <div>
                  <h4 className="font-black text-blue-400 uppercase text-xs tracking-widest">System Recommendation</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Reference ID: IM-GEN-{Math.floor(Math.random() * 10000)}</p>
                </div>
              </div>
              <p className="text-slate-200 leading-relaxed font-medium text-lg whitespace-pre-wrap">{advice}</p>
            </div>
          )}
        </div>
        
        <div className="mt-10 p-6 bg-slate-800/30 rounded-2xl border border-white/5">
           <p className="text-center text-[11px] text-slate-500 uppercase tracking-widest font-black leading-loose">
             Official Notice: This digital insight tool provides automated data mapping based on clinical test catalogs. This information is intended for educational purposes and is not a substitute for professional medical consultation, diagnosis, or treatment.
           </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticGuidance;