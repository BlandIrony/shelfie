import { fetcher } from "../utils";

export async function fetchBook(id: string) {
    return await fetcher(`/api/fetchbook?id=${id}`)
}