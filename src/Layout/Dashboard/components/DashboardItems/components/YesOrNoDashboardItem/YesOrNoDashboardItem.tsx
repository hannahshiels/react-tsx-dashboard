import { Empty, Image } from "antd";
import Api from "@constants/Api";
import Text from "@constants/Text";
import { useApi } from "@hooks/hooks";

import { DashboardApiItemProps } from "@interfaces/interfaces";
import DashboardItem from "../DashboardItem/DashboardItem";

type YesOrNo = {
  answer: string,
  image: string;
}

const YesOrNoDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;

    const yesOrNo = useApi<YesOrNo>(Api.YesOrNo);

    if (!yesOrNo) return <Empty/>

    const createImg = () => {
        return <Image style={{maxWidth:"300px"}} alt={Text.FoxImageHeading} src={yesOrNo.image} />
    }

    return(
       <DashboardItem hide={hide} title={Text.YesOrNoHeading} description={createImg()}/>
    )
}

export default YesOrNoDashboardItem;