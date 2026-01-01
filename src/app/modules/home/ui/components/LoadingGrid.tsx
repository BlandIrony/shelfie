export default function LoadingGrid({ count = 10 }: { count?: number }) {
  return (
    <div className="grid grid-cols-5 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="border-2 border-sh-black bg-white animate-pulse"
        >
          <div className="h-[30rem] border-b-2 border-sh-black bg-neutral-200" />
          <div className="p-3 space-y-3">
            <div className="h-6 bg-neutral-300 w-3/4" />
            <div className="flex justify-between">
              <div className="h-5 bg-neutral-300 w-1/3" />
              <div className="h-5 bg-neutral-300 w-1/6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
