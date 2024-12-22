
import { Upload, Cloud } from 'lucide-react';
import { Button } from './ui/Button';
import { useAuth } from '@clerk/clerk-react';

export function Hero() {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Upload Your Insurance Document and Let AI Handle the Rest
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Simply upload your document, and get all the information you need in seconds.
        </p>

        <div className="mt-12">
          {isSignedIn && (
            <Button variant="neumorphic" className="px-8 py-4 rounded-xl">
              <span className="flex items-center space-x-3 text-blue-600 font-semibold">
                <Cloud className="w-6 h-6" />
                <span>Upload Document</span>
              </span>
            </Button>
          )}
        </div>

        <div className="mt-6">
          {isSignedIn && (
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
              <input
                type="file"
                accept=".pdf, .jpg, .jpeg, .png, .docx"
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="mt-2 text-sm text-gray-500">
                Supported file types: PDF, JPG, PNG, DOCX
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
          <span className="flex flex-col items-center">
            <Upload className="w-8 h-8 text-blue-600 mb-1" />
            PDF
          </span>
          <span className="flex flex-col items-center">
            <Upload className="w-8 h-8 text-blue-600 mb-1" />
            JPG
          </span>
          <span className="flex flex-col items-center">
            <Upload className="w-8 h-8 text-blue-600 mb-1" />
            PNG
          </span>
          <span className="flex flex-col items-center">
            <Upload className="w-8 h-8 text-blue-600 mb-1" />
            DOCX
          </span>
        </div>
      </div>
    </div>
  );
}
