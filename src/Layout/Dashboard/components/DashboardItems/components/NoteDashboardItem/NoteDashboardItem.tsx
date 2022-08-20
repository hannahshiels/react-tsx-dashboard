import DashboardItem from "../DashboardItem/DashboardItem";
import { DashboardApiItemProps } from "@interfaces/interfaces";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";

interface NoteProps {
  heading: string;
  content: string;
  id: number;
  deleteNote: (id: number) => void;
}

const NoteDashboardItem = (props: DashboardApiItemProps & NoteProps) => {
  const actions = [
    <DeleteOutlined onClick={() => props.deleteNote(props.id)} />,
  ];

  return (
    <DashboardItem
      actions={actions}
      title={props.heading}
      description={<span className="minCardHeight"> {props.content} </span>}
    />
  );
};

export default NoteDashboardItem;
