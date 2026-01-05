import BookDetails from "@/src/app/modules/book/ui/BookDetails";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <section className="">
            <BookDetails bookId={id}/>
        </section>
    )
}