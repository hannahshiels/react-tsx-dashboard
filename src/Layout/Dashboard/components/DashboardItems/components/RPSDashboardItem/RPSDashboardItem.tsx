import Text from "@constants/Text";

import DashboardItem from "../DashboardItem/DashboardItem";
import { DashboardApiItemProps } from "@interfaces/interfaces";

const RPSDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;

    return(
        <DashboardItem hide={hide} title={Text.RPSHeading} description={""}/>
    )
}

export default RPSDashboardItem;