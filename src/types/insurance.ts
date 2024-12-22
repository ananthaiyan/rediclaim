export type InsuranceStatus = 'active' | 'expired' | 'pending';

export interface Insurance {
  id: string;
  type: string;
  provider: string;
  policyNumber: string;
  expiryDate: string;
  status: InsuranceStatus;
}