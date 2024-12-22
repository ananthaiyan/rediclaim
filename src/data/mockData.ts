import { Insurance } from '../types/insurance';

export const mockInsurances: Insurance[] = [
  {
    id: '1',
    type: 'Health Insurance',
    provider: 'Blue Cross',
    policyNumber: 'HC123456',
    expiryDate: '2024-12-31',
    status: 'active',
  },
  {
    id: '2',
    type: 'Car Insurance',
    provider: 'State Farm',
    policyNumber: 'CI789012',
    expiryDate: '2024-10-15',
    status: 'active',
  },
  {
    id: '3',
    type: 'Home Insurance',
    provider: 'Progressive',
    policyNumber: 'HI345678',
    expiryDate: '2024-08-22',
    status: 'pending',
  },
];