import NavBar from "@/components/navigations/NavBar";
import SideBar from "@/components/navigations/SideBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className='w-full min-h-[100svh] bg-n-20 flex relative'>
            <SideBar />
            <div className="w-full h-full">
                <NavBar />
                <div className="p-8 w-full min-h-screen">
                    {children}
                </div>
            </div>
        </section>
    );
}
