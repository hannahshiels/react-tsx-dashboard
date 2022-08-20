import { Input, Modal, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";

interface CreateNoteModalProps {
  isVisible: boolean;
  createNote: (title:string, content:string) => void;
  closeModal: () => void;
}

const CreateNoteModal = (props: CreateNoteModalProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onSuccess = () => {
        props.createNote(title, content)
        props.closeModal()
    }

  return (
    <Modal
    title="Create a note"
      visible={props.isVisible}
      onOk={onSuccess}
      onCancel={props.closeModal}
    >
        <Space className="fullWidth" size={"large"} direction="vertical">
         <Input  onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <TextArea className="textAreaHeight" size="large"  onChange={(e) => setContent(e.target.value)} placeholder="Content" showCount maxLength={100}/> 
        </Space>
    </Modal>
  );
};

export default CreateNoteModal;
