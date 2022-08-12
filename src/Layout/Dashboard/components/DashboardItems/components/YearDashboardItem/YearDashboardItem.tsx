import { Empty } from "antd";
import Api from "Constants/Api";
import Text from "Constants/Text";

import DashboardItem from "../DashboardItem/DashboardItem";
import { DashboardApiItemProps } from "Interfaces/interfaces";
import { useApi } from "Hooks/hooks";

const YearDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;

    const yearFact= useApi<string>(Api.Year);
    if (!yearFact) return <Empty/>
    return(
        <DashboardItem hide={hide} title={Text.YearFactHeading} description={yearFact}/>
    )
}

export default YearDashboardItem;