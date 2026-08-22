'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { logError } from '@/lib/logger';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logError(error, { digest: error.digest });
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full glass p-8 rounded-2xl text-center border border-red-500/20 space-y-6">
        <div className="inline-flex p-4 bg-red-500/10 text-red-400 rounded-2xl">
          <AlertTriangle size={32} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Unexpected Application Error</h2>
          <p className="text-sm text-slate-400">
            An error occurred while rendering this component. Our monitoring system has logged the details.
          </p>
        </div>
        <button
          onClick={() => reset()}
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw size={18} /> Try Again
        </button>
      </div>
    </div>
  );
}
