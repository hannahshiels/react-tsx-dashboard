import { Card } from "antd";
import { ReactNode } from "react";

interface DashboardItemProps {
    hide?: boolean;
    actions?: React.ReactNode[];
    title: string;
    description: string | ReactNode;
}

const DashboardItem: React.FC<DashboardItemProps> = (props) => {

    if(props.hide){
        return(
            <></>
        )
    }
    if(!props.actions){
        return <Card className="dashboardItem" hoverable title={props.title}>
        {props.description}
    </Card>
    } else {
        return <Card actions={props.actions} className="dashboardItem" hoverable title={props.title}>
        {props.description}
    </Card>
    }

}

export default DashboardItem;