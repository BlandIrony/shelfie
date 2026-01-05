// import Image from "next/image";
import Link from "next/link"

// import imageOne from "@/src/app/assets/icons/code.png";
// import imageTwo from "@/src/app/assets/icons/github.png";

export default function Footer() {
    return (
        <footer className="px-[1rem] flex flex-col items-center space-y-[3rem] py-[2rem]">
            <div className="w-full md:w-[135rem] flex-shrink-0 flex items-center justify-center">
                <Link href="" target="_blank" data-hover-wiggle="2" className="inline-block group overflow-hidden relative rf-shadow w-full space-y-[.5rem] md:space-y-[1.25rem] p-[3rem] md:p-[6rem] border-5 md:border-10 border-sh-black rounded-full bg-sh-red transition duration-500">
                    <span className="block text-[1rem] md:text-[2.25rem] text-center tracking-tighter">
                        Interested in seeing more stuff? Checkout my GitHub!
                    </span>
                    <span className="inline-block text-[4.5rem] md:text-[15rem] tracking-tighter uppercase font-clashDisplay">
                        BlandIrony
                    </span>
                    {/* <Image
                        src={imageOne}
                        alt="Code icon"
                        width={50}
                        height={50}
                        className="w-[5rem] absolute -bottom-20 -rotate-15 left-[30rem] scale-0 group-hover:scale-110 group-hover:bottom-0 transition-all duration-700 ease-in-out"
                    />
                    <Image
                        src={imageTwo}
                        alt="GitHub icon"
                        width={50}
                        height={50}
                        className="w-[10rem] absolute top-0 -rotate-15 right-60 scale-0 group-hover:scale-110 group-hover:top-22 transition-all duration-600 ease-in-out"
                    /> */}
                </Link>
            </div>
            <p className="text-[1.5rem]">
                &copy; {new Date().getFullYear()} Shelfie. All rights reserved.
            </p>
        </footer>
    )
}