import {FC} from "react";
import TwoContent from "@/app/(home)/components/TwoContent";
import RightSidebar from "@/app/(home)/components/RightSidebar";


const Home: FC = () => {
    return (
        <TwoContent main={<h1>Main</h1>} right={<RightSidebar />} />
    )
}

export default Home;