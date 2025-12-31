import LandingLayout from "../modules/home/ui/components/LandingLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <LandingLayout>
            { children }
        </LandingLayout>
    )
}