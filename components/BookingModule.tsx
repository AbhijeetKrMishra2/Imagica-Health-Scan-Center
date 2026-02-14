
import React, { useState } from 'react';
import { TESTS } from '../constants';
import { HealthTest } from '../types';

interface BookingModuleProps {
  onBack: () => void;
}

const BookingModule: React.FC<BookingModuleProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [selectedTest, setSelectedTest] = useState<HealthTest | null>(null);
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    phone: '',
    otp: '',
    collectionType: 'center'
  });

  const nextStep = () => setStep(step + 1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Book Your Diagnostic Test</h2>
        <p className="text-slate-500">Fast, reliable, and secure booking process.</p>
      </div>

      {/* Steps Indicator */}
      <div className="flex justify-between items-center mb-10 px-10 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -z-10"></div>
        {[1, 2, 3].map(i => (
          <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition ${step >= i ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-400 border-2 border-slate-200'}`}>
            {i}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100">
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Select a Test or Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TESTS.map(test => (
                <div 
                  key={test.id}
                  onClick={() => setSelectedTest(test)}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition flex flex-col justify-between ${selectedTest?.id === test.id ? 'border-blue-500 bg-blue-50/50' : 'border-slate-100 hover:border-slate-200'}`}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full mb-2 inline-block">
                      {test.category}
                    </span>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">{test.name}</h4>
                    <p className="text-sm text-slate-500 mb-4">{test.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xl font-bold text-slate-900">₹{test.price}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedTest?.id === test.id ? 'border-blue-500 bg-blue-500' : 'border-slate-300'}`}>
                      {selectedTest?.id === test.id && <span className="text-white text-xs">✓</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6 flex justify-end">
              <button 
                disabled={!selectedTest}
                onClick={nextStep}
                className="bg-blue-600 disabled:bg-slate-300 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-blue-100 transition"
              >
                Proceed to Details
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Patient Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter patient name"
                  className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 transition"
                  value={patientDetails.name}
                  onChange={(e) => setPatientDetails({...patientDetails, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 ml-1">Phone Number</label>
                <div className="flex gap-2">
                  <input 
                    type="tel" 
                    placeholder="Mobile number"
                    className="flex-grow p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 transition"
                    value={patientDetails.phone}
                    onChange={(e) => setPatientDetails({...patientDetails, phone: e.target.value})}
                  />
                  <button className="bg-slate-900 text-white px-4 rounded-xl font-semibold text-xs whitespace-nowrap">Send OTP</button>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 ml-1">Sample Collection</label>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button 
                    onClick={() => setPatientDetails({...patientDetails, collectionType: 'center'})}
                    className={`flex-1 py-3 rounded-lg text-sm font-bold transition ${patientDetails.collectionType === 'center' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
                  >
                    At Center
                  </button>
                  <button 
                    onClick={() => setPatientDetails({...patientDetails, collectionType: 'home'})}
                    className={`flex-1 py-3 rounded-lg text-sm font-bold transition ${patientDetails.collectionType === 'home' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
                  >
                    Home Visit
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 ml-1">OTP Verification</label>
                <input 
                  type="text" 
                  placeholder="Enter 6-digit OTP"
                  className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>
            <div className="pt-8 flex justify-between">
              <button onClick={() => setStep(1)} className="text-slate-500 font-bold px-6 py-3">Back</button>
              <button 
                onClick={nextStep}
                className="bg-blue-600 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-blue-100 transition"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-10 space-y-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-5xl mx-auto animate-bounce">✅</div>
            <h3 className="text-3xl font-extrabold text-slate-900">Booking Confirmed!</h3>
            <div className="max-w-xs mx-auto p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Booking ID</p>
              <p className="text-2xl font-mono font-black text-blue-900">#IM-29402</p>
            </div>
            <p className="text-slate-600 max-w-sm mx-auto">
              We've sent a confirmation SMS to your mobile. Please arrive 15 minutes before your scheduled slot.
            </p>
            <div className="pt-6">
              <button 
                onClick={onBack}
                className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold shadow-xl transition hover:bg-slate-800"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModule;
