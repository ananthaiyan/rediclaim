import { useUser } from '@clerk/clerk-react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { InsuranceCard } from '../components/dashboard/InsuranceCard';
import { mockInsurances } from '../data/mockData';

export function Dashboard() {
  const { user } = useUser();

  const handleUpload = () => {
    // TODO: Implement document upload
    console.log('Upload document');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <DashboardHeader 
        userName={user?.firstName || 'User'} 
        onUpload={handleUpload} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockInsurances.map((insurance) => (
          <InsuranceCard key={insurance.id} insurance={insurance} />
        ))}
      </div>
    </div>
  );
}