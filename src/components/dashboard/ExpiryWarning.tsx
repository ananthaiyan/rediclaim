import { AlertCircle } from 'lucide-react';

interface ExpiryWarningProps {
  expiryDate: string;
}

export function ExpiryWarning({ expiryDate }: ExpiryWarningProps) {
  const isExpiringSoon = new Date(expiryDate) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  if (!isExpiringSoon) return null;

  return (
    <div className="flex items-center text-amber-600">
      <AlertCircle className="w-4 h-4 mr-1" />
      <span className="text-sm">Expiring soon</span>
    </div>
  );
}