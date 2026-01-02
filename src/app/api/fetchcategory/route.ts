import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const subject = searchParams.get('subject');
    const page = Number(searchParams.get("page")) || 1;

    if(!subject) {
        return NextResponse.json(
            { error: 'Subject is required' },
            { status: 400 }
        )
    }

    const safeSubject = encodeURIComponent(subject.toLowerCase())
    const LIMIT = 20;
    const offset = (page - 1) * LIMIT;


    try {
        const res = await fetch(`${process.env.BASE_URL}/subjects/${safeSubject}.json?limit=20&offset=${offset}`, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Shelfie/1.0 (blandirony@gmail.com)'
            }
        })

        const data = await res.json()

        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 })
    }
}