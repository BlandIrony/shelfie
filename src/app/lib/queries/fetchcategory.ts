import { fetcher } from "../utils";

export async function fetchCategory(subject: string) {
    return await fetcher(`/api/fetchcategory?subject=${subject}`)
}