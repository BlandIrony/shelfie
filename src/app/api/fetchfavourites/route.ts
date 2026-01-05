import { NextRequest, NextResponse } from "next/server";

type FavouriteBook = {
  id: string;
  title: string;
  author: string | null;
  coverId: number | null;
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idsParam = searchParams.get("ids");

  if (!idsParam) {
    return NextResponse.json(
      { error: "No favourite ids provided" },
      { status: 400 }
    );
  }

  const ids = idsParam.split(",").filter(Boolean);

  try {
    const books = await Promise.allSettled(
      ids.map(async (id): Promise<FavouriteBook> => {
        const workRes = await fetch(
          `${process.env.BASE_URL}/works/${id}.json`,
          {
            headers: {
              "Content-Type": "application/json",
              "User-Agent": "Shelfie/1.0 (blandirony@gmail.com)",
            },
          }
        );

        if (!workRes.ok) {
          throw new Error(`Failed to fetch work ${id}`);
        }

        const work = await workRes.json();

        let authorName: string | null = null;

        const authorKey = work?.authors?.[0]?.author?.key;
        if (authorKey) {
          try {
            const authorRes = await fetch(
              `${process.env.BASE_URL}${authorKey}.json`,
              {
                headers: {
                  "Content-Type": "application/json",
                  "User-Agent": "Shelfie/1.0 (blandirony@gmail.com)",
                },
              }
            );

            if (authorRes.ok) {
              const author = await authorRes.json();
              authorName = author?.name ?? null;
            }
          } catch {
            authorName = null;
          }
        }

        return {
          id,
          title: work.title ?? "Untitled",
          author: authorName,
          coverId: work?.covers?.[0] ?? null,
        };
      })
    );

    const successfulBooks = books
      .filter(
        (result): result is PromiseFulfilledResult<FavouriteBook> =>
          result.status === "fulfilled"
      )
      .map((result) => result.value);

    return NextResponse.json(successfulBooks);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch favourites" },
      { status: 500 }
    );
  }
}
