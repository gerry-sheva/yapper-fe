import Sidebar from "@/app/(home)/components/Sidebar";

export default function HomeLayout({
children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={"flex min-h-screen"}>
            <Sidebar />
            {children}
        </div>
    );
}