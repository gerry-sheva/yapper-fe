import {FC, ReactNode} from "react";
import {Bell, Bookmark, CircleEllipsis, Ellipsis, House, Mail, Search, User, Users} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import AvatarComponent from "@/app/(home)/components/avatar/AvatarComponent";


const LeftSidebar: FC = () => {
    return (
        <section className={"min-w-[320px] 2xl:min-w-[640px] flex flex-col items-end justify-between pr-2 py-6"}>
            <nav className={"w-60 gap-2"}>
                <h1 className={"font-bold pl-2 text-xl"}>Yapper</h1>
                <Item logo={<House />} text={"Home"}/>
                <Item logo={<Search />} text={"Explore"}/>
                <Item logo={<Bell />} text={"Notifications"}/>
                <Item logo={<Mail />} text={"Messages"}/>
                <Item logo={<Bookmark />} text={"Bookmarks"}/>
                <Item logo={<Users />} text={"Communities"}/>
                <Item logo={<User />} text={"Profile"}/>
                <Item logo={<CircleEllipsis />} text={"More"}/>
                <Button className={"w-60 py-5 bg-brand rounded-2xl text-white font-bold hover:bg-brand-dark"}>Yap</Button>
            </nav>
            <div className={"flex w-60 pr-2 items-center justify-between rounded-3xl hover:bg-gray-100"}>
                <AvatarComponent />
                <Ellipsis className={"items-end"} />
            </div>
        </section>
    )
}

export default LeftSidebar;

interface ItemProps {
    logo: ReactNode
    text: string
}

const Item: FC<ItemProps> = ({logo, text}) => {
    return (
        <Link href={"#"} className={"group text-xl font-semibold"}>
            <div className={"flex gap-4 w-fit pl-2 pr-6 py-2 rounded-3xl group-hover:bg-gray-100"}>
                {logo}
                <p>{text}</p>
            </div>
        </Link>
    )
}