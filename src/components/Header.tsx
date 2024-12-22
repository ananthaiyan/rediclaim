
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { SignInButton,  UserButton, useAuth } from '@clerk/clerk-react';
import { Button } from './ui/Button';

export function Header() {
  const { isSignedIn } = useAuth();

  return (
    <header className="w-full px-6 py-4 bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            RediClaim
          </span>
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          {isSignedIn && (
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
          )}
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
          {!isSignedIn ? (
            <div className="flex items-center space-x-4">
              <SignInButton mode="modal">
                <Button variant="neumorphic" className="text-blue-600 font-medium">
                  Sign In
                </Button>
              </SignInButton>

            </div>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </nav>
      </div>
    </header>
  );
}