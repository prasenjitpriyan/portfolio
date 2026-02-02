'use client';

import React, { useEffect, useState } from 'react';

const LoadingSplash: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [progress, setProgress] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Small delay to smooth transition
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return <>{children}</>;

  return (
    <>
      <div className="fixed inset-0 z-50 h-screen bg-black flex flex-col justify-center items-center text-white">
        <h1 className="text-2xl text-pretty font-thin mb-4">PRASENJIT DAS</h1>
        <div className="w-2/3 h-[1px] rounded">
          <div
            className="h-full bg-white rounded transition-all duration-150"
            style={{ width: `${progress}%` }}></div>
        </div>
        <p className="mt-4">{progress}%</p>
      </div>
      <div className="hidden">{children}</div>
    </>
  );
};

export default LoadingSplash;
