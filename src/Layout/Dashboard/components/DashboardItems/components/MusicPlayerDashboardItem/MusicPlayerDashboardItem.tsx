import Api from "Constants/Api";
import Text from "Constants/Text";
import { DashboardApiItemProps } from "Interfaces/interfaces";
import DashboardItem from "../DashboardItem/DashboardItem";
import song from "Assets/Music/lofi.mp3"

const MusicPlayerDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;

    const createMusicPlayer = (music:string) => {
        return(
            <audio style={{display: "flex", width:"100%"}} controls>
                <source src={music} type="audio/mpeg" /> 
            </audio>
        )
    }

    return(
       <DashboardItem hide={hide} title={Text.MusicPlayerHeading} description={createMusicPlayer(song)}/>
    )
}

export default MusicPlayerDashboardItem;