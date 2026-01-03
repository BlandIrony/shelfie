"use client";

export default function BookResultCardSkeleton() {
  return (
    <div
      className="flex gap-4 border-2 rounded-[1rem] p-3 animate-pulse"
      aria-hidden
    >
      <div className="relative size-[8rem] shrink-0 overflow-hidden rounded-[.75rem] bg-gray-200" />

      <div className="flex flex-col justify-between py-[.75rem] flex-1">
        <div className="space-y-3">
          <div className="h-6 w-3/4 rounded-md bg-gray-200" />

          <div className="h-5 w-1/2 rounded-md bg-gray-200" />
        </div>

        <div className="h-5 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}
