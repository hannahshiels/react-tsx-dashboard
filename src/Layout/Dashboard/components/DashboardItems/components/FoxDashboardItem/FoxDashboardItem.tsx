import { Empty, Image } from "antd";
import Api from "Constants/Api";
import Text from "Constants/Text";

import DashboardItem from "../DashboardItem/DashboardItem";
import { DashboardApiItemProps } from "Interfaces/interfaces";
import { useApi } from "Hooks/hooks";

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