"use client";

export default function LoadingSkeleton() {
  return (
    <div className="relative min-h-[calc(100vh-6.35rem)] w-full animate-pulse">
      <div className="pt-15 w-[54%] space-y-8">
        <div className="h-[4rem] w-[70%] bg-gray-300 rounded-lg"></div>
        <div className="h-[2rem] w-[30%] bg-gray-300 rounded-lg"></div>
        <div className="space-y-4">
          <div className="h-[1.5rem] w-[15%] bg-gray-300 rounded-lg"></div>
          <div className="h-[10rem] w-full bg-gray-300 rounded-lg"></div>
        </div>

        <div className="space-y-4">
          <div className="h-[1.5rem] w-[25%] bg-gray-300 rounded-lg"></div>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-40 w-32 bg-gray-300 rounded-lg shrink-0"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed top-25 right-[4rem] w-[40%] h-[calc(100vh-6.35rem)]">
        <div className="h-full w-full p-[8rem]">
          <div className="h-full w-full border-4 rotate-3 rounded-[2rem] bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}