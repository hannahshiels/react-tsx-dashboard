import { Empty } from "antd";
import Api from "@constants/Api";
import Text from "@constants/Text";

import DashboardItem from "../DashboardItem/DashboardItem";
import { DashboardApiItemProps } from "@interfaces/interfaces";
import { useApi } from "@hooks/hooks";

const YearDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;

    const yearFact= useApi<string>(Api.Year);
    if (!yearFact) return <Empty/>
    return(
        <DashboardItem hide={hide} title={Text.YearFactHeading} description={yearFact}/>
    )
}

export default YearDashboardItem;