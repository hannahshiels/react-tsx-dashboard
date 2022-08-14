import { Empty } from "antd";
import Api from "@constants/Api";
import Text from "@constants/Text";
import { useApi } from "@hooks/hooks";

import { DashboardApiItemProps } from "@interfaces/interfaces";
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