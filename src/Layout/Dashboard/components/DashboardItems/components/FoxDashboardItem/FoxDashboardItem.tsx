import { Empty, Image } from "antd";
import Api from "@constants/Api";
import Text from "@constants/Text";

import DashboardItem from "../DashboardItem/DashboardItem";
import { DashboardApiItemProps } from "@interfaces/interfaces";
import { useApi } from "@hooks/hooks";

type FoxImage = {
  image: string;
}

const FoxDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;
    const fox = useApi<FoxImage>(Api.Fox)

    if (!fox) return <Empty/>

    const createImg = () => {
        return <Image style={{maxWidth:"300px"}} alt={Text.FoxImageHeading} src={fox.image} />
    }

    return(
        <DashboardItem hide={hide} title={Text.FoxImageHeading} description={createImg()}/>
    )
}

export default FoxDashboardItem;