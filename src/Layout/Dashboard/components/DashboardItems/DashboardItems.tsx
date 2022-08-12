import { DashboardItemsState } from "Types/types";
import AdviceDashboardItem from "./components/AdviceDashboardItem/AdviceDashboardItem";
import CatFactDashboardItem from "./components/CatFactDashboardItem/CatFactDashboardItem";
import DadJokeDashboardItem from "./components/DadJokeDashboardItem/DadJokeDashboardItem";
import FoxDashboardItem from "./components/FoxDashboardItem/FoxDashboardItem";
import LyricsDashboardItem from "./components/LyricsDashboardItem/LyricsDashboardItem";
import ProgrammingQuoteDashboardItem from "./components/ProgrammingQuoteDashboardItem/ProgrammingQuoteDashboardItem";
import YearDashboardItem from "./components/YearDashboardItem/YearDashboardItem";
import YesOrNoDashboardItem from "./components/YesOrNoDashboardItem/YesOrNoDashboardItem";
import { Typography  } from "antd";
import MusicPlayerDashboardItem from "./components/MusicPlayerDashboardItem/MusicPlayerDashboardItem";
const { Text, Link } = Typography;

interface DashboardItemsProps {
    display: DashboardItemsState
}

const DashboardItems = (props: DashboardItemsProps) => {
    const allDashboardItemsVisibility = props.display.hideYearFactItem && props.display.hideCatFactItem && props.display.hideFoxItem && props.display.hideProgrammingItem && props.display.hideAdviceItem  && props.display.hideDadJokeItem && props.display.hideYesOrNoItem && props.display.hideLyricsItem;

    if(allDashboardItemsVisibility){
        return(<Text> Leave and <Link href="https://www.google.com/" target="_blank"> find something else. </Link> </Text>)
    }

    return <>
    <YearDashboardItem hide={props.display.hideYearFactItem} />
    <CatFactDashboardItem hide={props.display.hideCatFactItem}/>
    <FoxDashboardItem hide={props.display.hideFoxItem}/>
    <ProgrammingQuoteDashboardItem hide={props.display.hideProgrammingItem}/>
    <AdviceDashboardItem hide={props.display.hideAdviceItem}/>
    <DadJokeDashboardItem hide={props.display.hideDadJokeItem}/>
    <YesOrNoDashboardItem hide={props.display.hideYesOrNoItem}/>
    <LyricsDashboardItem hide={props.display.hideLyricsItem}/>
    <MusicPlayerDashboardItem hide={props.display.hideMusicPlayerItem} />
    </>
}

export default DashboardItems;