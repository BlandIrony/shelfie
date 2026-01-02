// import { SidebarProvider, SidebarTrigger } from "@/src/app/components/ui/sidebar";
// import SidebarComponent from "../../../globals/components/SidebarComponent";
import Navbar from "../../../globals/components/Navbar";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
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
        </>
    )
}