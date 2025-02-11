import {FC} from "react";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import AvatarInfoCard from "@/app/(home)/components/avatar/AvatarInfoCard";
import FollowButton from "@/app/(home)/components/button/FollowButton";


const RightSidebar: FC = () => {
    return (
        <section className={"space-y-4"}>
            <SearchBar />
            <Trending />
            <FollowSuggestions />
        </section>
    )
}

export default RightSidebar;

const SearchBar: FC = () => {
    return (
        <div className={"w-[320px] border rounded-3xl px-4 py-2 flex items-center gap-2 text-gray-600"}>
            <Search className={"w-4"} />
            <p>Search</p>
        </div>
    )
}

const Trending: FC = () => {
    return (
        <div className={"w-[320px] h-fit border rounded-xl pt-2.5"}>
            <h3 className={"text-2xl font-bold mb-2 px-4"}>What&#39;s happening</h3>
            <TrendingItem />
            <TrendingItem />
            <TrendingItem />
            <TrendingItem />
            <ShowMore />
        </div>
    )
}

const TrendingItem: FC = () => {
    return (
        <div className={"py-2 px-4 hover:bg-gray-100 hover:cursor-pointer"}>
            <p className={"text-gray-400"}>Trending in Your Area</p>
            <p className={"font-semibold"}>#ArknightsEndfield</p>
            <p className={"text-gray-400"}>21K posts</p>
        </div>
    )
}

const FollowSuggestions: FC = () => {
    return (
        <div className={"w-[320px] h-fit border rounded-xl pt-2.5"}>
            <h3 className={"text-2xl font-bold mb-4 px-4"}>Who to Follow</h3>
            <People />
            <People />
            <People />
            <ShowMore />
        </div>
    )
}

const People: FC = () => {
    return (
        <div className={"flex px-4 py-2 items-center justify-between hover:bg-gray-100"}>
            <AvatarInfoCard />
            <FollowButton />
        </div>
    )
}

const ShowMore: FC = () => {
    return (
        <Link href={"#"}>
            <div className={"px-4 py-4 hover:bg-gray-100 rounded-b-xl"}>
                <p className={"text-brand font-semibold"}>
                    Show more
                </p>
            </div>
        </Link>
    )
}