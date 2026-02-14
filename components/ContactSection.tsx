
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 lg:py-32 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 uppercase tracking-tighter mb-8">Contact Our Support Team</h2>
          <div className="h-2 w-32 bg-orange-500 rounded-full mx-auto mb-10"></div>
          <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg lg:text-xl leading-relaxed">
            Have questions about our specialized 3 Tesla MRI or CT scan packages? Our medical support team is ready to assist you.
          </p>
        </div>

        {/* Layout optimized for laptop - split at lg (1024px) */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Contact Details Cards */}
          <div className="space-y-6 lg:space-y-8">
            {[
              { label: 'Registered Office', val: CONTACT_INFO.address, icon: '📍', color: 'bg-blue-100' },
              { label: 'Phone Support', val: CONTACT_INFO.phone, sub: '7:30 AM - 7:00 PM', icon: '📞', color: 'bg-orange-100' },
              { label: 'Email Inquiry', val: CONTACT_INFO.email, icon: '✉️', color: 'bg-blue-900', text: 'text-white' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition duration-500 hover:-translate-y-1">
                <div className={`w-14 h-14 lg:w-16 lg:h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-8 ${item.text || ''}`}>{item.icon}</div>
                <h4 className="font-black text-blue-900 uppercase tracking-widest text-[10px] lg:text-xs mb-3">{item.label}</h4>
                <p className={`font-black leading-relaxed ${i === 1 ? 'text-xl lg:text-2xl tracking-tighter' : 'text-base lg:text-lg text-slate-700'}`}>{item.val}</p>
                {item.sub && <p className="text-slate-400 text-xs font-bold mt-2 uppercase tracking-widest">{item.sub}</p>}
              </div>
            ))}
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-16 lg:p-14 xl:p-20 rounded-[3.5rem] shadow-2xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce">✅</div>
                  <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Message Received!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto font-medium text-lg">Thank you. Our medical representative will contact you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-12 px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition">Send New Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Full Name</label>
                      <input required type="text" className="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-blue-500 focus:bg-white transition outline-none font-bold" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Email Address</label>
                      <input required type="email" className="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-blue-500 focus:bg-white transition outline-none font-bold" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Phone Number</label>
                      <input required type="tel" className="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-blue-500 focus:bg-white transition outline-none font-bold" value={formState.phone} onChange={e => setFormState({...formState, phone: e.target.value})} />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Subject</label>
                      <select className="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-blue-500 focus:bg-white transition outline-none font-black text-slate-700 uppercase tracking-tighter" value={formState.subject} onChange={e => setFormState({...formState, subject: e.target.value})}>
                        <option value="">General Purpose</option>
                        <option value="booking">Test Booking</option>
                        <option value="report">Report Query</option>
                        <option value="corporate">Corporate Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Message</label>
                    <textarea required rows={5} className="w-full p-6 bg-slate-50 rounded-3xl border-2 border-transparent focus:border-blue-500 focus:bg-white transition outline-none resize-none font-medium text-lg" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}></textarea>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-blue-200 transition transform hover:-translate-y-2">
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
