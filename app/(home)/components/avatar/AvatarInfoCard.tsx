import {FC} from "react";
import AvatarComponent from "@/app/(home)/components/avatar/AvatarComponent";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import FollowButton from "@/app/(home)/components/button/FollowButton";

const AvatarInfoCard: FC = () => {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <AvatarComponent />
            </HoverCardTrigger>
            <HoverCardContent className={"w-[288px] bg-white rounded-xl shadow-card drop-shadow-md space-y-2"}>
                <div className={"flex justify-between"}>
                    <div className={"flex flex-col gap-1"}>
                        <Avatar className={"h-12 w-12"}>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className={"flex flex-col"}>
                            <p className={"font-semibold"}>Username</p>
                            <p className={"text-gray-600 font-light"}>@Userhandler</p>
                        </div>
                    </div>
                    <FollowButton />
                </div>
                <p>
                    Yapper user
                </p>
                <div className={"flex gap-3"}>
                    <p><span className={"font-bold"}>0</span> Following</p>
                    <p><span className={"font-bold"}>0</span> Followers</p>
                </div>
            </HoverCardContent>
        </HoverCard>

    )
}

export default AvatarInfoCard