import {FC} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const AvatarComponent: FC = () => {
    return (
        <div className={"flex gap-1"}>
            <Avatar className={"h-12 w-12"}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className={"flex flex-col"}>
                <p className={"font-semibold"}>Username</p>
                <p className={"text-gray-600 font-light"}>@Userhandler</p>
            </div>
        </div>
    )
}

export default AvatarComponent