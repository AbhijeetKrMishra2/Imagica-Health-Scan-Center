
import React from 'react';
import { INVESTOR_DOCS } from '../constants';

const InvestorSection: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 uppercase tracking-tighter">Investor Relations</h2>
          <p className="text-slate-600 max-w-3xl text-lg md:text-xl font-medium leading-relaxed">
            We believe in transparency and robust corporate governance. Access our financial health, strategic roadmaps, and key disclosures below.
          </p>
        </div>

        {/* Stats Grid - Optimized: 4 columns starting at lg (laptop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16">
          {[
            { label: 'Market Cap', value: '$250M+', sub: 'Estimated' },
            { label: 'Growth YoY', value: '34%', sub: 'Last Quarter' },
            { label: 'Locations', value: '45+', sub: 'Active Centers' },
            { label: 'Partners', value: '120+', sub: 'Hospitals & Clinics' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col items-center text-center group hover:border-blue-400 transition-all hover:-translate-y-1">
              <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-3 group-hover:text-blue-500 transition-colors">{stat.label}</span>
              <span className="text-2xl lg:text-3xl xl:text-5xl font-black text-blue-900">{stat.value}</span>
              <span className="text-xs font-bold text-slate-500 mt-4 px-4 py-1 bg-slate-50 rounded-full">{stat.sub}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Financial Disclosures</h3>
            <div className="flex bg-slate-100 p-1.5 rounded-2xl">
              <button className="px-6 py-3 bg-white shadow-lg rounded-xl text-xs font-black uppercase tracking-widest text-blue-600">All Documents</button>
              <button className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-800 transition">Recent Only</button>
            </div>
          </div>

          <div className="overflow-x-auto -mx-8 md:mx-0">
            <div className="inline-block min-w-full align-middle px-8 md:px-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="text-left py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-6">Document Title</th>
                    <th className="text-left py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-6">Year</th>
                    <th className="text-left py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-6">Category</th>
                    <th className="text-right py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] px-6">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {INVESTOR_DOCS.map((doc, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-all group cursor-pointer">
                      <td className="py-8 px-6">
                        <span className="font-black text-lg text-slate-900 block group-hover:text-blue-600 transition-colors">{doc.title}</span>
                      </td>
                      <td className="py-8 px-6">
                        <span className="text-slate-500 font-bold text-lg">{doc.year}</span>
                      </td>
                      <td className="py-8 px-6">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap ${
                          doc.category === 'Financial' ? 'bg-blue-100 text-blue-700' : 
                          doc.category === 'Meeting' ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {doc.category}
                        </span>
                      </td>
                      <td className="py-8 px-6 text-right">
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition shadow-lg">
                          PDF <span className="text-lg">⬇</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorSection;
