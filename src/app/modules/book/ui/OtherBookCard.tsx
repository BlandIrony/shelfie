"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  coverId?: number | null;
};

export default function OtherBookCard({ id, title, coverId }: Props) {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "/images/book-placeholder.png";

  return (
    <Link
      href={`/book/${id.replace("/works/", "")}`}
      className="
        snap-start
        shrink-0
        w-[24rem]
        space-y-4
        p-4
        border-2
        rounded-[1rem]
        bg-sh-white
        transition
        hover:-translate-y-1
        hover:shadow-[3px_3px_#222419]
      "
    >
      <div className="aspect-square w-full overflow-hidden rounded-[0.75rem] border-2">
        <Image
          src={coverUrl}
          alt={`Cover of ${title}`}
          width={300}
          height={450}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="text-[1.35rem] font-medium leading-tight line-clamp-2">
        {title}
      </p>
    </Link>
  );
}
