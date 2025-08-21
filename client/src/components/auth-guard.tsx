import { useState, useEffect } from "react";

// Simple 404 page component
function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-500">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Skip authentication in development mode
    if (import.meta.env.DEV) {
      setIsAuthenticated(true);
      return;
    }
    
    // Check if RZP_KEY is available in environment variables
    const rzpKey = import.meta.env.VITE_RZP_KEY;
    
    if (!rzpKey) {
      setIsAuthenticated(false);
      return;
    }

    // Verify the key by making a test request to the server
    fetch('/api/health', {
      headers: {
        'RZP_KEY': rzpKey
      }
    })
    .then(response => {
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    })
    .catch(() => {
      setIsAuthenticated(false);
    });
  }, []);

  if (isAuthenticated === null) {
    // Loading state
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <NotFoundPage />;
  }

  return <>{children}</>;
}