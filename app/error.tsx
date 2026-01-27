'use client'; 
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error ke console browser
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-p5-red p-4">
      <h2 className="font-heading text-6xl mb-4 animate-pulse">CRITICAL FAILURE!</h2>
      <p className="font-body text-white text-xl mb-8 max-w-md text-center">
        Something went wrong in the system. The Phantom Thieves are investigating.
      </p>
      <button
        onClick={() => reset()}
        className="bg-p5-red text-white font-heading text-2xl px-8 py-2 hover:bg-white hover:text-p5-red transition-colors"
      >
        TRY AGAIN
      </button>
    </div>
  );
}