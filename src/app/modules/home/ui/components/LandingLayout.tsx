"use client";
// import { SidebarProvider, SidebarTrigger } from "@/src/app/components/ui/sidebar";
// import SidebarComponent from "../../../globals/components/SidebarComponent";
import { useCommandK } from "@/src/app/hooks/use-comman-k";
import Navbar from "../../../globals/components/Navbar";
import SearchModal from "../../../globals/components/SearchModal";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    useCommandK();
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
            <main className="px-16 pt-25 w-full">
                { children }
            </main>

            <SearchModal />
        </>
    )
}