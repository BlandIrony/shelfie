import { truncateText } from "@/src/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";

type BookCardProps = {
  id: string;
  title: string;
  author?: string;
  coverUrl?: string;
  year?: string;
};

export default function BookCard({
  id,
  title,
  author,
  coverUrl,
  year
}: BookCardProps) {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();  

        console.log('Clicked')
    }
  return (
    <Link
      href={`/books/${id}`}
      className="inline-block transition-all duration-200 ease-in-out
                 hover:-translate-x-1 hover:-translate-y-1
                 hover:shadow-[6px_6px_#222419]"
    >
      <figure
        className="w-full bg-white border-2 border-sh-black"
      >
        <div className="relative h-[24rem] w-full border-b-2 border-sh-black bg-neutral-200">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={`Cover of ${title}`}
              height={350}
              width={350}
              className="h-full w-full object-cover"
              loading="eager"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[1.25rem] font-bold">
              NO COVER
            </div>
          )}
        </div>

        <figcaption className="p-3">
          <h3 className="text-[1.5rem] font-bold leading-tight line-clamp-2">
            {truncateText(title, 25)}
          </h3>

          <div className="mt-3 flex items-center justify-between">
              {author && (
                <p className="text-[1.25rem] font-medium text-neutral-700">
                  {author}
                </p>
              )}
              {year && (
                <p className="text-[1.25rem] font-medium text-neutral-700">
                  {year}
                </p>
              )}

          </div>
        </figcaption>
      </figure>
      <button
        onClick={(e) => handleClick(e)}
        className="w-full border-x-2 border-b-2 border-sh-black p-[1.5rem] bg-sh-brown text-[1.35rem] font-medium"
      >
        Add to Favourite
      </button>
    </Link>
  );
}
