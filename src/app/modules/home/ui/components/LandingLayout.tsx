"use client";
// import { SidebarProvider, SidebarTrigger } from "@/src/app/components/ui/sidebar";
// import SidebarComponent from "../../../globals/components/SidebarComponent";
import { useCommandK } from "@/src/app/hooks/use-comman-k";
import Navbar from "../../../globals/components/Navbar";
import SearchModal from "../../../globals/components/SearchModal";
import { Search } from "lucide-react";
import { useSearchStore } from "@/src/app/store/search-store";
import Footer from "../../../globals/components/Footer";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    useCommandK();
    const open = useSearchStore((s) => s.open)
    // return (
    //     <SidebarProvider
    //         defaultOpen={true}
    //     >
    //         <SidebarComponent />
    //         <main className="w-full">
    //             <SidebarTrigger />
    //             {children}
    //         </main>
    //     </SidebarProvider>
    // )
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-20 bg-sh-yellow border-b-4">
                <Navbar />
            </div>
            <main className="px-[1rem] pt-30 md:px-16 md:pt-25 w-full">
                <div className="md:hidden w-full mb-[2rem]">
                    <button
                        onClick={() => open()}
                        className="w-full px-[1.25rem] py-[.75rem] bg-bg-primary border-2 rounded-[1rem] border-sh-black transition-all duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1 shadow-[3px_3px_#222419] hover:shadow-none outline-0"
                    >
                        <div className="w-full flex gap-4 items-center justify-between">
                            <div className="flex gap-4">
                                <Search className="w-[2.25rem]"/>
                                <span className="inline-block text-sh-black text-[1.25rem] border-0 outline-0 py-[.75rem]">
                                    Title, author, or year
                                </span>
                            </div>
                            <kbd className="hidden md:inline-block p-[.75rem] rounded-[.75rem] text-[1.25rem] bg-sh-pink border-2 text-center">
                                CtrlK
                            </kbd>                        
                        </div>
                    </button>
                </div>
                { children }
            </main>

            <SearchModal />

            <Footer /> 
        </>
    )
}