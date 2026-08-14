'use client';

export function PageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar skeleton */}
      <div className="h-16 border-b border-border flex items-center justify-between px-6">
        <div className="h-5 w-20 bg-secondary rounded animate-pulse" />
        <div className="flex gap-4">
          <div className="h-5 w-24 bg-secondary rounded animate-pulse" />
          <div className="h-8 w-8 rounded-full bg-secondary animate-pulse" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-6 max-w-2xl">
          <div className="h-4 w-32 bg-secondary rounded-full animate-pulse mx-auto" />
          <div className="h-14 w-80 bg-secondary rounded-lg animate-pulse mx-auto" />
          <div className="h-5 w-96 bg-secondary rounded-lg animate-pulse mx-auto" />
          <div className="flex gap-4 justify-center">
            <div className="h-11 w-32 bg-primary/20 rounded-xl animate-pulse" />
            <div className="h-11 w-28 bg-secondary rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
