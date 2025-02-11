import {FC} from 'react'
import {Button} from "@/components/ui/button";


const FollowButton: FC = () => {
    return (
        <Button className={"bg-brand text-white rounded-3xl font-bold hover:bg-brand-dark"}>Follow</Button>
    )
}

export default FollowButton