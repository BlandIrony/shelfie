import { fetcher } from "../utils";

export async function fetchCategory(subject: string, page: number) {
    const params = new URLSearchParams({
        subject,
        page: page.toString()
    })
    return await fetcher(`/api/fetchcategory?${params.toString()}`)
}