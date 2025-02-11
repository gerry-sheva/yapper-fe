import {FC} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {AutosizeTextarea} from "@/components/ui/AutosizeTextarea";
import {Globe} from "lucide-react";
import {Button} from "@/components/ui/button";

const MainContent: FC = () => {
    return (
        <section>
            <div className={"flex h-16 border-b"}>
                <div className={"flex-1 flex items-center justify-center h-full hover:bg-gray-100"}>
                    <p>For you</p>
                </div>
                <div className={"flex-1 flex items-center justify-center h-full text-center hover:bg-gray-100"}>
                    <p>Following</p>
                </div>
            </div>
            <NewYap />
        </section>
    )
}

export default MainContent;

const NewYap: FC = () => {
    return (
        <div className={"flex px-4 pt-4 pb-2 border-b"}>
            <Avatar className={"h-12 w-12"}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className={"flex-1 flex flex-col gap-2"}>
                <div className={"border-b p-2"}>
                    <AutosizeTextarea
                        placeholder={"What is happening?!"}
                        className={""}
                    />
                    <div className={"flex gap-1 text-brand font-semibold"}>
                        <Globe className={"w-4"} />
                        <p>Everyone can reply</p>
                    </div>
                </div>
                <Button className={"w-20 self-end bg-brand rounded-2xl text-white font-bold hover:bg-brand-dark"}>Yap</Button>
            </div>
        </div>
    )
}