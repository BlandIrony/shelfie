"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OtherBookCard from "./OtherBookCard";

type Book = {
  key: string | null | undefined;
  id: string;
  title: string;
  cover_id: number | null | undefined;
};

type Props = {
  books: Book[];
};

export default function OtherBooksCarousel({ books }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "next" ? 300 : -300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll("prev")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-sh-purple border-2 border-sh-black text-sh-black p-3 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <ChevronLeft />
      </button>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >
        {books.map((book) => (
          <OtherBookCard
            key={book.key}
            id={book.key}
            title={book.title}
            coverId={book.cover_id}
          />
        ))}
      </div>

      <button
        onClick={() => scroll("next")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-sh-purple border-2 border-sh-black text-sh-black p-3 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
