import {FC} from "react";
import TwoContent from "@/app/(home)/components/TwoContent";
import RightSidebar from "@/app/(home)/components/RightSidebar";
import MainContent from "@/app/(home)/components/MainContent";


const Home: FC = () => {
    return (
        <TwoContent main={<MainContent />} right={<RightSidebar />} />
    )
}

export default Home;