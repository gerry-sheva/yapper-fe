import {FC} from "react";
import AvatarComponent from "@/app/(home)/components/avatar/AvatarComponent";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"



// type AvatarInfoCardProps = {
//     trigger: ReactElement<typeof AvatarComponent>
// }

const AvatarInfoCard: FC = () => {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <AvatarComponent />
            </HoverCardTrigger>
            <HoverCardContent>
                The React Framework – created and maintained by @vercel.
            </HoverCardContent>
        </HoverCard>

    )
}

export default AvatarInfoCard