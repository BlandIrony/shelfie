"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-6.35rem)] flex items-center justify-center px-6">
      <div className="max-w-[60rem] w-full bg-white border-4 border-sh-black rounded-[2rem] shadow-[8px_8px_#222419] p-[4rem] text-center">
        <div className="mb-8 inline-block border-4 border-sh-black rounded-[1.5rem] bg-sh-purple px-8 py-4">
          <span className="font-clashDisplay text-[4rem] md:text-[6rem] leading-none">
            404
          </span>
        </div>

        <h1 className="font-clashDisplay text-[3rem] md:text-[3.5rem] mb-6">
          This page has gone off the shelf.
        </h1>

        <p className="text-[1.5rem] md:text-[1.75rem] font-medium leading-[2.75rem] mb-10">
          We looked between the covers, checked the index, and even shook the
          bookshelf but this page doesn’t exist. It may have been misfiled,
          removed, or never published in the first place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/"
            className="inline-block border-2 border-sh-black rounded-[1rem] bg-sh-brown px-8 py-4 text-[1.5rem] font-semibold transition-all duration-100 ease-in-out
                       hover:translate-x-1 hover:translate-y-1 shadow-[3px_3px_#222419] hover:shadow-none"
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}
