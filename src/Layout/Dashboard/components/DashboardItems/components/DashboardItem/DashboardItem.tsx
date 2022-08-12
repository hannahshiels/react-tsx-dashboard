import { Card } from "antd";
import { ReactNode } from "react";

interface DashboardItemProps {
    hide?: boolean;
    title: string;
    description: string | ReactNode;
}

const DashboardItem: React.FC<DashboardItemProps> = (props) => {

    if(props.hide){
        return(
            <></>
        )
    }

    return <Card style={{minWidth: "250px",maxWidth:"300px", minHeight:"200px", margin:"1rem"}} hoverable title={props.title}>
        {props.description}
    </Card>
}

export default DashboardItem;