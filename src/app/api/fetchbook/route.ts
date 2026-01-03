/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing work id" },
      { status: 400 }
    );
  }

  try {
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
      throw new Error("Failed to fetch work");
    }

    const work = await workRes.json();
    console.log(work)

    const authorKey = work?.authors?.[0]?.author?.key;

    if (!authorKey) {
      return NextResponse.json(
        { error: "Author not found for this work" },
        { status: 404 }
      );
    }

    const authorRes = await fetch(
      `${process.env.BASE_URL}${authorKey}.json`,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Shelfie/1.0 (blandirony@gmail.com)",
        },
      }
    );

    const author = await authorRes.json();
    console.log(author)

    const authorWorksRes = await fetch(
      `${process.env.BASE_URL}${authorKey}/works.json?limit=10`,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Shelfie/1.0 (blandirony@gmail.com)",
        },
      }
    );

    const authorWorks = await authorWorksRes.json();

    const otherWorks =
      authorWorks?.entries
        ?.filter((w: any) => w.key !== work.key)
        ?.slice(0, 6)
        ?.map((w: any) => ({
          key: w.key,
          title: w.title,
          cover_id: w.covers?.[0] ?? null,
        })) ?? [];

    return NextResponse.json({
      work: {
        key: work.key,
        title: work.title,
        description:
          typeof work.description === "string"
            ? work.description
            : work.description?.value ?? null,
        characters: work.subject_people,
        first_publish_date: work.first_publish_date,
        covers: work.covers?.slice(0, 5) ?? [],
        subjects: work.subjects?.slice(0, 10) ?? [],
      },
      author: {
        key: author.key,
        name: author.name,
        bio: 
          typeof author.bio === "string"
            ? author.bio
            : author.bio?.value ?? null
        ,
        photos: author.photos,
        birth_date: author.birth_date ?? null,
        death_date: author.death_date ?? null,
      },
      otherWorks,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch book details" },
      { status: 500 }
    );
  }
}
