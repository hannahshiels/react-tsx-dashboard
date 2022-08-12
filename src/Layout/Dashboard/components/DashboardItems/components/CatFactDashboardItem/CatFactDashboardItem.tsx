import { Empty } from "antd";
import Api from "Constants/Api";
import Text from "Constants/Text";
import { useApi } from "Hooks/hooks";

import { DashboardApiItemProps } from "Interfaces/interfaces";
import DashboardItem from "../DashboardItem/DashboardItem";

type CatFact = {
  data: string[];
}

const CatFactDashboardItem= (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;

    const catFact = useApi<CatFact>(Api.Cat);

    if (!catFact) return <Empty/>

    return(
       <DashboardItem hide={hide} title={Text.CatFactHeading} description={catFact.data[0]}/>
    )
}

export default CatFactDashboardItem;