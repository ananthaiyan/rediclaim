import { InsuranceStatus } from '../../types/insurance';

interface StatusBadgeProps {
  status: InsuranceStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    active: 'bg-green-100 text-green-800',
    expired: 'bg-red-100 text-red-800',
    pending: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}