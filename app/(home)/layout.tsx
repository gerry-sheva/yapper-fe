import LeftSidebar from "@/app/(home)/components/LeftSidebar";

export default function HomeLayout({
children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={"flex min-h-screen w-screen"}>
            <LeftSidebar />
            {children}
        </div>
    );
}