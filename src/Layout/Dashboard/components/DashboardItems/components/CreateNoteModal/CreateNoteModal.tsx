import { Form, Input, Modal, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";

interface CreateNoteModalProps {
  isVisible: boolean;
  createNote: (title: string, content: string) => void;
  closeModal: () => void;
}

const CreateNoteModal = (props: CreateNoteModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [form] = Form.useForm();

  const resetForm = () => {
    form.resetFields();
  };

  const onSuccess = () => {
    props.createNote(title, content);
    resetForm();
    props.closeModal();
  };



  return (
    <Modal
      title="Create a note"
      visible={props.isVisible}
      onOk={onSuccess}
      onCancel={props.closeModal}
    >
      <Form onFinish={(values) => console.log(values)} form={form}>
        <Space className="fullWidth" size={"large"} direction="vertical">
          <Form.Item name="title">
            <Input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </Form.Item>
          <Form.Item name="content">
            <TextArea
              onChange={(e) => setContent(e.target.value)}
              className="textAreaHeight"
              size="large"
              showCount
              maxLength={100}
              placeholder="Content"
            />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
};

export default CreateNoteModal;
