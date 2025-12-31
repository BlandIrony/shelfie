import { NextResponse } from "next/server"

export async function GET() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/subjects/fantasy.json?limit=10&offset=0`, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Shelfie/1.0 (blandirony@gmail.com)'
            }
        })

        const data = await res.json()

        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to fetch fantasy books" }, { status: 500 })
    }
}