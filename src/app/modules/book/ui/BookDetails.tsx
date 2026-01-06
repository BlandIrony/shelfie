"use client";

import Image from "next/image";
import { fetchBook } from "@/src/app/lib/queries/fetchbook";
import { useQuery } from "@tanstack/react-query";

import LoadingSkeleton from "./LoadingSkeleton";
import ErrorComponent from "./ErrorState";
import OtherBooksCarousel from "./OtherBooksCarousel";
import { useFavouriteStore } from "@/src/app/store/favorites-store";
import { stripLinks } from "@/src/app/lib/utils";

type Props = {
  bookId: string;
};

export default function BookDetails({ bookId }: Props) {
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavouriteStore();

  const isFavourite = favourites.includes(bookId);

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

  const authorImageUrl = data?.author?.photos?.[0]
    ? `https://covers.openlibrary.org/b/id/${data.author.photos[0]}-L.jpg`
    : undefined;

  const handleClick = () => {
    if (!isFavourite) addToFavourites(bookId);
    else removeFromFavourites(bookId);
  };

  return (
    <section className="relative min-h-[calc(100vh-6.35rem)] w-full md:flex md:gap-20">
      <div className="py-15 w-full md:w-[55%]">
        <div className="md:hidden h-[40rem] w-full border-4 mb-[2rem] rounded-[2rem]">
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

        <div className="flex flex-col md:flex-row md:justify-between mb-[5rem] md:mb-0">
          <div className="w-full md:max-w-[55rem] space-y-[1.25rem] mb-[4rem]">
            <h2 className="text-[3rem] md:text-[3.5rem] font-clashDisplay">
              {data?.work.title}
            </h2>
            <p className="font-sans font-medium tracking-tight text-[2rem]">
              By: {data?.author.name}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClick}
            className="shrink-0 h-fit border-2 rounded-[1rem] border-sh-black p-[1.5rem] bg-sh-red text-[1.35rem] font-medium transition-all duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 shadow-[3px_3px_#222419] hover:shadow-none"
          >
            {!isFavourite ? "Add to Favourites" : "Remove from Favourites"}
          </button>
        </div>

        {authorImageUrl && (
          <div className="flex flex-col md:flex-row gap-14 mb-[6rem]">
            <div className="shrink-0 h-[40rem] w-full md:h-[25rem] md:w-[23rem] border-4 rounded-[2rem] md:-rotate-3">
              <Image
                src={authorImageUrl}
                alt={`Photo of ${data?.author?.name}`}
                width={350}
                height={350}
                className="h-full w-full object-cover rounded-[inherit]"
                loading="eager"
              />
            </div>

            <div className="space-y-[2rem] max-w-[47rem]">
              <span className="inline-block mb-6 py-[1.25rem] px-[2rem] border-2 rounded-[1rem] bg-sh-purple text-[1.5rem] font-semibold">
                Author&apos;s Biography
              </span>
              <p className="text-[1.5rem] font-medium leading-[2.75rem]">
                {data?.author?.bio
                  ? stripLinks(data.author.bio)
                  : "No information available!"}
              </p>
            </div>
          </div>
        )}

        <div className="mb-[4rem]">
          <span className="inline-block mb-6 py-[1.25rem] px-[2rem] border-2 rounded-[1rem] bg-sh-purple text-[1.5rem] font-semibold">
            Description
          </span>
          <p className="text-[1.5rem] font-medium leading-[2.75rem]">
            {data?.work.description}
          </p>
        </div>

        <div className="w-full">
          <span className="w-fit block mb-6 py-[1.25rem] px-[2rem] border-2 rounded-[1rem] bg-sh-purple text-[1.5rem] font-semibold">
            Other books by author
          </span>
          <OtherBooksCarousel books={data?.otherWorks || []} />
        </div>
      </div>

      <div className="hidden md:block w-[45%] bg-sh-purple">
        <div className="sticky top-[3rem] max-h-[calc(100vh-8rem)]">
          <div className="h-full w-full p-[8rem]">
            <div className="h-[48rem] w-full border-4 rotate-3 rounded-[2rem]">
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
    </section>
  );
}
