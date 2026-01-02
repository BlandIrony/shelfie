"use client";

import Image from "next/image";
import { fetchBook } from "@/src/app/lib/queries/fetchbook";
import { useQuery } from "@tanstack/react-query";

import LoadingSkeleton from "./LoadingSkeleton";
import ErrorComponent from "./ErrorState";
import OtherBooksCarousel from "./OtherBooksCarousel";

type Props = {
  bookId: string;
};

export default function BookDetails({ bookId }: Props) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["book-detail", bookId],
    queryFn: () => fetchBook(bookId),
    retry: 2,
    retryDelay: 1000,
  });

  if (isLoading) return <LoadingSkeleton />;
  if (error) return <ErrorComponent onRetry={() => refetch()} />;

  const coverUrl = data?.work?.covers?.[0]
    ? `https://covers.openlibrary.org/b/id/${data.work.covers[0]}-L.jpg`
    : undefined;

  const authorImageUrl = data?.author.photos?.[0]
    ? `https://covers.openlibrary.org/b/id/${data.author.photos[0]}-L.jpg`
    : undefined;

console.log(data)

  return (
    <div className="relative min-h-[calc(100vh-6.35rem)] w-full">
      <div className="pt-15 w-[54%]">
        <div className="flex justify-between">
          <div className="max-w-[55rem] space-y-[1.25rem] mb-[8rem]">
            <h2 className="text-[3.5rem] font-clashDisplay">{data?.work.title}</h2>
            <p className="font-sans font-medium tracking-tight text-[2rem]">
              By: {data?.author.name}
            </p>
            {
                authorImageUrl && (
                    <div className="h-[25rem] w-[23rem] border-4 rounded-[2rem] -rotate-3">
                        <Image
                            src={authorImageUrl}
                            alt={`Cover of ${data?.author?.name}`}
                            width={350}
                            height={350}
                            className="h-full w-full object-cover rounded-[inherit]"
                            loading="eager"
                        />
                    </div>
                )
            }
          </div>

          <button
            className="shrink-0 h-fit border-2 rounded-[1rem] border-sh-black p-[1.5rem] bg-sh-brown text-[1.35rem] font-medium transition-all duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 shadow-[3px_3px_#222419] hover:shadow-none"
          >
            Add to Favourites
          </button>
        </div>

        <div className="mb-[4rem]">
          <span className="inline-block mb-6 py-[1.25rem] px-[2rem] border-2 rounded-[1rem] bg-sh-purple text-[1.5rem]">
            Description
          </span>
          <p className="text-[1.5rem] font-medium leading-[2.75rem]">{data?.work.description}</p>
        </div>

        <div className="w-full">
          <span className="w-fit block mb-6 py-[1.25rem] px-[2rem] border-2 rounded-[1rem] bg-sh-purple text-[1.5rem]">
            Other books by author
          </span>
          <OtherBooksCarousel books={data?.otherWorks || []} />
        </div>
      </div>

      <div className="fixed top-25 right-[4rem] w-[40%] h-[calc(100vh-6.35rem)] bg-sh-purple">
        <div className="h-full w-full p-[8rem]">
          <div className="h-full w-full border-4 rotate-3 rounded-[2rem]">
            {coverUrl && (
              <Image
                src={coverUrl}
                alt={`Cover of ${data?.work?.title}`}
                width={350}
                height={350}
                className="h-full w-full object-cover rounded-[inherit]"
                loading="eager"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
