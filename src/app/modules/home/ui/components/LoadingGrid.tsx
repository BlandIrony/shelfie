export default function LoadingGrid({ count = 10 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="inline-block animate-pulse rounded-[1rem] border-2 border-sh-black bg-white"
        >
          <figure className="w-full rounded-[inherit]">
            <div className="h-[30rem] md:h-[24rem] w-full rounded-[1rem] border-b-2 border-sh-black bg-neutral-300" />

            <figcaption className="p-3">
              <div className="h-6 w-3/4 rounded-[1rem] bg-neutral-300" />

              <div className="mt-3 flex rounded-[1rem] items-center justify-between gap-3">
                <div className="h-5 w-1/2 rounded bg-neutral-300" />
                <div className="h-5 w-12 rounded bg-neutral-300" />
              </div>
            </figcaption>
          </figure>
          <div className="w-full rounded-b-[1rem] border-x-2 border-b-2 border-sh-black bg-neutral-300 p-[1.5rem]" />
        </div>
      ))}
    </div>
  );
}
