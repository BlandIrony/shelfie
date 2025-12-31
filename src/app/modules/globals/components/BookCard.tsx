import { truncateText } from "@/src/app/lib/utils";
import Image from "next/image";
import Link from "next/link";

type BookCardProps = {
  id: string;
  title: string;
  author?: string;
  coverUrl?: string;
};

export default function BookCard({
  id,
  title,
  author,
  coverUrl,
}: BookCardProps) {
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
        <div className="relative h-[30rem] w-full border-b-2 border-sh-black bg-neutral-200">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={`Cover of ${title}`}
              fill
              className="object-cover"
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

          {author && (
            <p className="mt-4 text-[1.25rem] font-medium text-neutral-700">
              {author}
            </p>
          )}
        </figcaption>
      </figure>
    </Link>
  );
}
