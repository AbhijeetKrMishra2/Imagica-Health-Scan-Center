
import { HealthTest, InvestorDoc } from './types';

export const TESTS: HealthTest[] = [
  { id: '1', name: 'Executive Health Checkup', description: 'Comprehensive panel including CBC, LFT, KFT, Vitamin D, and Lipid Profile.', price: 4999, category: 'Preventive' },
  { 
    id: '2', 
    name: 'Cancer Screening Head to Toe', 
    description: 'Comprehensive screening: MRI/CT Brain, USG Thyroid, HRCT Thorax, Breast Sonomammography, USG Abdomen, TRUS/MRI Prostate. Includes Blood Markers: CEA, CA-125, PSA, and Serum LDH.', 
    price: 12500, 
    category: 'Preventive' 
  },
  { 
    id: '3', 
    name: '2D Liver Elastography (Mindray Resona i9)', 
    description: 'Gold-standard non-invasive assessment of liver stiffness and fibrosis. Catch disease at stage 0.', 
    price: 3500, 
    category: 'Radiology' 
  },
  { 
    id: '4', 
    name: 'CT Coronary Angiography', 
    description: 'Emerging dimension of Preventive Radiology. High-speed 512 Slice CT for identifying coronary artery blockages and calcium scoring.', 
    price: 8500, 
    category: 'Radiology' 
  },
  { 
    id: '5', 
    name: 'Guided True Cut Biopsy', 
    description: 'Specialized core biopsy for histopathological correlation to ensure a final diagnosis. Performed by senior radiologists.', 
    price: 5000, 
    category: 'Pathology' 
  }
];

export const SERVICES_LIST = [
  { name: 'MRI 3 Tesla', color: 'bg-cyan-500' },
  { name: 'CT 512 Slice', color: 'bg-cyan-500' },
  { name: 'Ultrasound', color: 'bg-yellow-500' },
  { name: '2D Liver Elastography', color: 'bg-yellow-500' },
  { name: 'Mammography', color: 'bg-purple-500' },
  { name: '4D Echo', color: 'bg-purple-500' },
  { name: 'Digital X-Ray', color: 'bg-red-500' },
  { name: 'Uroflowmetry', color: 'bg-red-500' },
  { name: 'Endoscopy', color: 'bg-green-500' },
  { name: 'NCV', color: 'bg-green-500' },
  { name: '12 Channel ECG', color: 'bg-slate-700' },
  { name: 'True Guided Biopsies', color: 'bg-slate-700' },
  { name: 'Coronary Angiography', color: 'bg-pink-400' },
  { name: 'Fully Automatic Pathology', color: 'bg-pink-400' },
];

export const EXPERTS = [
  { 
    name: 'Dr. Mihir Kr. Jha', 
    title: 'Consultant (Radiology & Imaging)', 
    qualifications: 'MBBS (CMC, Kolkata), MD Radiology (IPGME & R Kolkata), FRCR-II A (London)', 
    specialty: 'Director',
    image: '👨‍⚕️' 
  },
  { 
    name: 'Dr. Suraj H. Chavan', 
    title: 'Cardiology', 
    qualifications: 'MBBS, MD, DNB (Cardiology)', 
    specialty: 'Consultant Cardiologist',
    image: '🫀' 
  },
  { 
    name: 'Dr. Udayan Bhattacharya', 
    title: 'Radiology', 
    qualifications: 'Consultant Radiologist, MBBS, MD Radiology', 
    specialty: 'Consultant Radiologist',
    image: '🔬' 
  },
  { 
    name: 'Dr. Cuckoo Udayan', 
    title: 'Oncoimaging', 
    qualifications: 'MBBS, DNB Radiodiagnosis, Fellowship in Oncoimaging, FRCR 2A (London)', 
    specialty: 'Consultant Radiologist',
    image: '🎗️' 
  },
  { 
    name: 'Dr. Varsha Sinha', 
    title: 'Sonologist', 
    qualifications: 'MBBS, MS (OBS)', 
    specialty: 'Sonology Specialist',
    image: '🤰' 
  },
  { 
    name: 'Dr. Seema Modi', 
    title: 'Sonologist', 
    qualifications: 'MBBS, MS (OBS)', 
    specialty: 'Sonology Specialist',
    image: '👶' 
  },
];

export const EQUIPMENTS = [
  { 
    name: 'Philips Achieva MRI 3 Tesla', 
    description: 'Gold-standard high-field MRI for exceptional image clarity.', 
    icon: '🧠',
    category: 'Radiology'
  },
  { 
    name: 'Philips Ingenuity 512 Slice CT Scan', 
    description: 'Unmatched speed with low radiation dose for patient safety.', 
    icon: '⚡',
    category: 'Radiology'
  },
  { 
    name: 'Mindray Resona i9 Ultrasound', 
    description: 'Advanced Liver Elastography and high-precision sonography.', 
    icon: '🛰️',
    category: 'Ultrasound'
  },
  { 
    name: 'Allengers Digital X-Ray (DR System)', 
    description: 'High-frequency 1000 mA system for instantaneous digital imaging.', 
    icon: '🩻',
    category: 'X-Ray'
  },
  { 
    name: 'Allengers MAM - Venus Digital Mammography', 
    description: 'Specialized digital breast cancer screening equipment.', 
    icon: '🎀',
    category: 'Mammography'
  },
  { 
    name: 'GE Voluson S8 Ultrasound', 
    description: 'Premium 2D, 3D, and 4D imaging for obstetric and general use.', 
    icon: '🎥',
    category: 'Ultrasound'
  },
];

export const INVESTOR_DOCS: InvestorDoc[] = [
  { title: 'Annual Report 2023-24', year: '2024', category: 'Financial', url: '#' },
  { title: 'Corporate Governance Framework', year: '2024', category: 'Governance', url: '#' },
  { title: 'Q3 Investor Briefing', year: '2023', category: 'Financial', url: '#' },
];

export const CONTACT_INFO = {
  name: 'IMAGICA HEALTH SCAN',
  address: 'Sri Ram Vatika, Barwadda Road, Dhaiya Dhanbad, 826001',
  phone: '+91 91550 01150 / 51',
  hours: '7:30 AM – 7:00 PM',
  email: 'imagicahealthscandhanbad@gmail.com'
};
