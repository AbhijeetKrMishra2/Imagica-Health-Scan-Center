
import React, { useState } from 'react';

interface ReportPortalProps {
  onBack: () => void;
}

const ReportPortal: React.FC<ReportPortalProps> = ({ onBack }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(phoneNumber.length === 10) setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Patient Dashboard</h2>
            <p className="text-slate-500">Welcome back, patient +91 {phoneNumber}</p>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="text-sm font-bold text-red-600 hover:underline">Logout</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-lg text-slate-700">Recent Reports</h3>
            {[
              { id: '1', name: 'Thyroid Profile', date: '24 May 2024', status: 'Ready' },
              { id: '2', name: 'Vitamin D Screening', date: '12 Apr 2024', status: 'Ready' },
              { id: '3', name: 'Full Body Checkup', date: '01 Jan 2024', status: 'Ready' },
            ].map(report => (
              <div key={report.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:border-blue-200 transition">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">📄</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{report.name}</h4>
                    <p className="text-xs text-slate-400">Tested on: {report.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase tracking-tighter">Ready to Download</span>
                  <button className="p-2 bg-slate-50 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition">
                    ⬇️
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-200">
              <h4 className="font-bold text-lg mb-2">Health Trend</h4>
              <p className="text-sm text-blue-100 mb-6">Your sugar levels have been stable over the last 3 months.</p>
              <div className="h-32 flex items-end justify-around gap-1 mb-4">
                {[40, 60, 45, 80, 55, 70].map((h, i) => (
                  <div key={i} style={{height: `${h}%`}} className="w-4 bg-white/30 rounded-t-sm hover:bg-white transition-all cursor-pointer"></div>
                ))}
              </div>
              <button className="w-full py-2 bg-white text-blue-600 rounded-xl text-sm font-bold">View Detailed Analysis</button>
            </div>

            <div className="bg-slate-100 rounded-3xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Quick Support</h4>
              <p className="text-sm text-slate-500 mb-4">Need help understanding your reports? Talk to our health advisor.</p>
              <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm font-bold">
                <span>💬</span> Chat with Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">🔐</div>
          <h2 className="text-2xl font-bold text-slate-900">Access Your Reports</h2>
          <p className="text-slate-500 mt-2">Enter your registered mobile number to get started.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+91</span>
              <input 
                required
                type="tel"
                placeholder="00000-00000"
                className="w-full pl-14 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            Get OTP
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-400">Having trouble? <a href="#" className="text-blue-600 font-bold hover:underline">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};

export default ReportPortal;
