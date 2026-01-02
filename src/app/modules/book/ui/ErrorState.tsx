"use client";

type Props = {
  onRetry: () => void;
};

export default function ErrorComponent({ onRetry }: Props) {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh] gap-4 text-[1.8rem]">
      <p>Oops! Something went wrong while fetching the book.</p>
      <button
        onClick={onRetry}
        className="px-6 py-3 border-2 border-sh-black rounded-[1rem] bg-sh-brown text-white text-[1.5rem] font-medium hover:translate-x-1 hover:translate-y-1 shadow-[3px_3px_#222419] hover:shadow-none transition-all duration-100 ease-in-out"
      >
        Retry
      </button>
    </div>
  );
}
