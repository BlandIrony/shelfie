"use client";

import BookCard from "../globals/components/BookCard";
import Categories from "./ui/components/Categories";
import LoadingGrid from "./ui/components/LoadingGrid";
import ErrorState from "./ui/components/ErrorState";
import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../lib/queries/fetchcategory";
import { useState, useEffect } from "react";
import { useCategoryStore } from "../../store/category-store";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/src/app/components/ui/pagination"

export default function Home() {
    const category = useCategoryStore((s) => s.category)
    const [page, setPage] = useState(1)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [page])

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["category-books", category, page],
    queryFn: () => fetchCategory(category, page),
    enabled: !!category,
    retry: 2,
    retryDelay: 1000,
  });

    const PAGE_SIZE = 20;
    const totalPages = Math.ceil(
        (data?.work_count ?? 0) / PAGE_SIZE
    );

    const canGoPrev = page > 1;
    const canGoNext = page < totalPages;

  return (
    <section className="w-full min-h-screen pt-6 md:pt-10">
      <div className="flex flex-col space-y-[3rem] md:space-y-0 md:flex-row justify-between">
        <Categories onCategoryChange={() => setPage(1)}/>

        <div>
          <h2 className="font-clashDisplay text-[2.5rem] md:text-[3rem] mb-[2rem]">
            Filter
          </h2>
        </div>
      </div>

      <div className="my-[6rem]">
        <h2 className="font-clashDisplay text-[2.5rem] md:text-[3rem] mb-[2rem]">
          All books on {category}
        </h2>

        {isLoading && <LoadingGrid />}

        {isError && (
          <ErrorState
            message={(error as Error).message}
            onRetry={refetch}
          />
        )}

        {/* Data */}
        {!isLoading && !isError && (
          <div className="space-y-20">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-8">
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
                
                <Pagination>
                    <PaginationContent className="gap-4">
                        <PaginationItem>
                            <PaginationPrevious
                                className="text-[1.5rem] p-[1.5rem] bg-sh-brown rounded-[1rem]" href="#"
                                onClick={() => canGoPrev && setPage((p) => p - 1)}
                                aria-disabled={!canGoPrev}
                            />
                        </PaginationItem>
                        {
                            Array.from({ length: totalPages })
                                .slice(Math.max(0, page - 2), page + 1)
                                .map((_, idx) => {
                                    const pageNumber = Math.max(1, page - 1) + idx;

                                    return (
                                        <PaginationItem key={pageNumber}>
                                            <PaginationLink
                                                className="text-[1.5rem] p-[1.5rem] cursor-pointer rounded-[1rem]"
                                                isActive={page === pageNumber}
                                                onClick={() => setPage(pageNumber)}
                                            >
                                                { pageNumber }
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                })
                        }
                        {/* <div className="items-center md:flex hidden">
                            <PaginationItem>
                                <PaginationLink className="text-[1.5rem] p-[1.5rem] bg-sh-white" href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis className=" p-[1.5rem]" />
                            </PaginationItem>
                        </div> */}
                        <PaginationItem>
                            <PaginationNext
                                className="text-[1.5rem] p-[1.5rem] bg-sh-brown rounded-[1rem]" href="#"
                                onClick={() => canGoNext && setPage((p) => p + 1)}
                                aria-disabled={!canGoNext}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

          
        )}

        {isFetching && !isLoading && (
          <p className="mt-4 text-sm opacity-70">Updating…</p>
        )}
      </div>
    </section>
  );
}
