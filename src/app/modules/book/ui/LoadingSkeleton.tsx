"use client";

export default function BookDetailsSkeleton() {
  return (
    <div className="relative min-h-[calc(100vh-6.35rem)] w-full animate-pulse">
      <div className="py-15 w-full md:w-[54%]">
        <div className="h-[40rem] w-full border-4 mb-[2rem] rounded-[2rem] bg-neutral-300" />

        <div className="flex flex-col md:flex-row md:justify-between mb-[5rem] md:mb-0 gap-6">
          <div className="w-full md:max-w-[55rem] space-y-[1.25rem] mb-[4rem]">
            <div className="h-14 w-3/4 rounded bg-neutral-300" />
            <div className="h-8 w-1/2 rounded bg-neutral-300" />
          </div>

          <div className="shrink-0 h-[5.5rem] w-[22rem] border-2 rounded-[1rem] border-sh-black bg-neutral-300" />
        </div>

        <div className="flex flex-col md:flex-row gap-14 mb-[6rem]">
          <div className="shrink-0 h-[40rem] w-full md:h-[25rem] md:w-[23rem] border-4 rounded-[2rem] md:-rotate-3 bg-neutral-300" />

          <div className="space-y-[2rem] max-w-[47rem]">
            <div className="h-12 w-[28rem] rounded-[1rem] bg-neutral-300" />
            <div className="space-y-4">
              <div className="h-6 w-full rounded bg-neutral-300" />
              <div className="h-6 w-full rounded bg-neutral-300" />
              <div className="h-6 w-5/6 rounded bg-neutral-300" />
              <div className="h-6 w-4/6 rounded bg-neutral-300" />
            </div>
          </div>
        </div>

        <div className="mb-[4rem]">
          <div className="h-12 w-[20rem] mb-6 rounded-[1rem] bg-neutral-300" />
          <div className="space-y-4">
            <div className="h-6 w-full rounded bg-neutral-300" />
            <div className="h-6 w-full rounded bg-neutral-300" />
            <div className="h-6 w-5/6 rounded bg-neutral-300" />
          </div>
        </div>

        <div className="w-full">
          <div className="h-12 w-[28rem] mb-6 rounded-[1rem] bg-neutral-300" />
          <div className="flex gap-6 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-[26rem] w-[18rem] shrink-0 rounded-[1.5rem] border-2 border-sh-black bg-neutral-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fixed side cover (desktop) */}
      <div className="hidden md:block fixed top-25 right-[4rem] w-[40%] h-[calc(100vh-6.35rem)]">
        <div className="h-full w-full p-[8rem]">
          <div className="h-full w-full border-4 rotate-3 rounded-[2rem] bg-neutral-300" />
        </div>
      </div>
    </div>
  );
}
