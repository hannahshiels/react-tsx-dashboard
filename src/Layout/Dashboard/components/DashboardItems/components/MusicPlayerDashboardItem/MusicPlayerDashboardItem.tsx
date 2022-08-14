import Text from "@constants/Text";
import { DashboardApiItemProps } from "@interfaces/interfaces";
import DashboardItem from "../DashboardItem/DashboardItem";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

const MusicPlayerDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;


    return(
       <DashboardItem hide={hide} title={Text.MusicPlayerHeading} description={<MusicPlayer/>}/>
    )
}

export default MusicPlayerDashboardItem;