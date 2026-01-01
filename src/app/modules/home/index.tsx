"use client";

import BookCard from "../globals/components/BookCard";
import Categories from "./ui/components/Categories";
import LoadingGrid from "./ui/components/LoadingGrid";
import ErrorState from "./ui/components/ErrorState";
import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../lib/queries/fetchcategory";
import { useState } from "react";
import { useCategoryStore } from "../../store/category-store";

export default function Home() {
    const category = useCategoryStore((s) => s.category)

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["category-books", category],
    queryFn: () => fetchCategory(category),
    enabled: !!category,
    retry: 2,
    retryDelay: 1000,
  });

  return (
    <section className="w-full min-h-screen pt-10">
      <div className="flex justify-between">
        <Categories />

        <div>
          <h2 className="font-clashDisplay text-[3rem] mb-[2rem]">
            Filter
          </h2>
        </div>
      </div>

      <div className="my-[6rem]">
        <h2 className="font-clashDisplay text-[3rem] mb-[2rem]">
          All books
        </h2>

        {/* Loading */}
        {isLoading && <LoadingGrid />}

        {/* Error */}
        {isError && (
          <ErrorState
            message={(error as Error).message}
            onRetry={refetch}
          />
        )}

        {/* Data */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-5 gap-8">
            {data?.works.map(
              (book: {
                key: string;
                title: string;
                authors?: { name: string }[];
                cover_id?: number;
                first_publish_year?: string;
              }) => (
                <BookCard
                  key={book.key}
                  id={book.key.replace("/works/", "")}
                  title={book.title}
                  author={book.authors?.[0]?.name}
                  coverUrl={
                    book.cover_id
                      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
                      : undefined
                  }
                  year={book.first_publish_year}
                />
              )
            )}
          </div>
        )}

        {isFetching && !isLoading && (
          <p className="mt-4 text-sm opacity-70">Updating…</p>
        )}
      </div>
    </section>
  );
}
