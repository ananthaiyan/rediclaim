
import { Plus } from 'lucide-react';
import { Button } from '../ui/Button';

interface DashboardHeaderProps {
  userName: string;
  onUpload: () => void;
}

export function DashboardHeader({ userName, onUpload }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userName}!</h1>
        <p className="text-gray-600 mt-2">Manage your insurance documents and claims</p>
      </div>
      <Button variant="neumorphic" className="flex items-center space-x-2" onClick={onUpload}>
        <Plus className="w-5 h-5" />
        <span>Upload New Document</span>
      </Button>
    </div>
  );
}