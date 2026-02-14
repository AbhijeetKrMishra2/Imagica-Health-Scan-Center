
export enum AppView {
  HOME = 'home',
  BOOKING = 'booking',
  REPORTS = 'reports',
  INVESTORS = 'investors',
  GOVERNANCE = 'governance',
  SHAREHOLDERS = 'shareholders',
  LOCATIONS = 'locations',
  CAREERS = 'careers',
  ABOUT = 'about',
  LEADERSHIP = 'leadership',
  COMPLIANCE = 'compliance',
  CONTACT = 'contact',
  HEALTH_PACKAGES = 'health_packages',
  HOME_COLLECTION = 'home_collection',
  APOLLO_PARTNERSHIP = 'apollo_partnership'
}

export interface HealthTest {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Pathology' | 'Radiology' | 'Preventive';
}

export interface Booking {
  id: string;
  testId: string;
  patientName: string;
  date: string;
  slot: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
}

export interface InvestorDoc {
  title: string;
  year: string;
  category: 'Financial' | 'Governance' | 'Meeting';
  url: string;
}
