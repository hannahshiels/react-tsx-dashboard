import { Empty } from "antd";
import Api from "@constants/Api";
import Text from "@constants/Text";
import { useApi } from "@hooks/hooks";

import { DashboardApiItemProps } from "@interfaces/interfaces";
import DashboardItem from "../DashboardItem/DashboardItem";

type Advice = {
  slip: {
    advice: string;
  };
}

const AdviceDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;

    const advice = useApi<Advice>(Api.Advice);

    if (!advice) return <Empty/>

    return(
       <DashboardItem hide={hide} title={Text.AdviceHeading} description={advice.slip.advice}/>
    )
}

export default AdviceDashboardItem;