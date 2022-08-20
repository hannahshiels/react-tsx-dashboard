import { PropertySafetyFilled } from "@ant-design/icons";
import { ReactNode, useState } from "react";
import NoteDashboardItem from "../NoteDashboardItem/NoteDashboardItem";


interface Note {
    title: string;
    content: string;
  } 
  

interface NoteDashboardItemsProps {
    notes: Note[]
    deleteNote: (index:number) => void;
}

const NoteDashboardItems = (props: NoteDashboardItemsProps) => {
    return (
        <>
        {props.notes.map((key,index) =>{
           return <NoteDashboardItem key={index} heading={key.title} content={key.content} id={0} deleteNote={props.deleteNote} />
        })}
        </>
    )
}

export default NoteDashboardItems;