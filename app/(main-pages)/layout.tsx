import NavBar from "@/components/navigations/NavBar";
import SideBar from "@/components/navigations/SideBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className='w-full h-[100svh] bg-n-20 flex'>
            <SideBar />
            <div className="w-full h-full">
                <NavBar />
                {children}
            </div>
        </section>
    );
}
