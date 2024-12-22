import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Insurance } from '../../types/insurance';
import { StatusBadge } from './StatusBadge';
import { ExpiryWarning } from './ExpiryWarning';

interface InsuranceCardProps {
  insurance: Insurance;
}

export function InsuranceCard({ insurance }: InsuranceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <FileText className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">{insurance.type}</h3>
        </div>
        <StatusBadge status={insurance.status} />
      </div>

      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium">Provider:</span> {insurance.provider}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Policy Number:</span> {insurance.policyNumber}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Expiry Date:</span>{' '}
          {new Date(insurance.expiryDate).toLocaleDateString()}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Button variant="neumorphic" className="text-sm">
          View Details
        </Button>
        <ExpiryWarning expiryDate={insurance.expiryDate} />
      </div>
    </div>
  );
}