import { Empty } from "antd";
import Api from "Constants/Api";
import Text from "Constants/Text";
import { useApi } from "Hooks/hooks";

import { DashboardApiItemProps } from "Interfaces/interfaces";
import DashboardItem from "../DashboardItem/DashboardItem";

type DadJoke = {
  joke: string
}

const DadJokeDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;

    const dadJoke = useApi<DadJoke>(Api.DadJoke);

    if (!dadJoke) return <Empty/>
    return(
       <DashboardItem hide={hide} title={Text.DadJokeHeading} description={dadJoke.joke}/>
    )
}

export default DadJokeDashboardItem;