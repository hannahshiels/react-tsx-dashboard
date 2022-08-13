import { Empty, Typography } from "antd";
import Api from "@constants/Api";
import Text from "@constants/Text";

import DashboardItem from "../DashboardItem/DashboardItem";
import { DashboardApiItemProps } from "@interfaces/interfaces";
import { useApi } from "@hooks/hooks";


 type Quote = {
    id: string;
    author: string;
    en: string;
 }

const ProgrammingQuoteDashboardItem = (props: DashboardApiItemProps) => {
    const hide = props.hide ?? false;

    const programmingQuote = useApi<Quote>(Api.ProgrammingQuote);

    if (!programmingQuote) return <Empty/>

    const createQuote = () => {
        return(
            <div style={{display:"flex", flexDirection:"column"}}>
            <Typography> {programmingQuote.en} </Typography>
            <Typography style={{marginTop:"1rem",marginLeft:"auto"}}> - {programmingQuote.author} </Typography>
            </div>
        )
    }


    return(
        <DashboardItem hide={hide} title={Text.ProgrammingQuoteHeading} description={createQuote()}/>
    )
}

export default ProgrammingQuoteDashboardItem;