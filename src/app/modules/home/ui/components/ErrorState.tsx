type ErrorStateProps = {
  message?: string;
  onRetry: () => void;
};

export default function ErrorState({
  message = "Something went wrong while fetching books.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center border-2 border-sh-black bg-white p-6 max-w-md">
        <h3 className="text-[1.75rem] font-bold mb-2">Oops.</h3>
        <p className="text-[1.25rem] mb-4">{message}</p>
        <button
          onClick={onRetry}
          className="border-2 border-sh-black px-4 py-2
                     bg-sh-clay font-semibold
                     hover:-translate-x-1 hover:-translate-y-1
                     hover:shadow-[4px_4px_#222419]
                     transition-all"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
