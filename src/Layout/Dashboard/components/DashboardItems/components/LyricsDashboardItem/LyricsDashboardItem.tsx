import { Button, Empty, Form, Modal, Typography } from "antd";
import Api from "@constants/Api";
import Text from "@constants/Text";

import DashboardItem from "../DashboardItem/DashboardItem";
import { DashboardApiItemProps } from "@interfaces/interfaces";
import Input from "antd/lib/input/Input";


import { useState } from "react";
import axios from "axios";

type Lyrics = {
  lyrics: string;
};

const LyricsDashboardItem = (props: DashboardApiItemProps) => {
  const hide = props.hide ?? false;
  const [isVisible, setVisible] = useState(false);
  const [content, setContent] = useState(<></>);
  const [lyrics, setLyrics] = useState<Lyrics>();

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setContent(<></>);
    setVisible(false);
  };

  const [form] = Form.useForm();
  const artistValue = Form.useWatch("artist", form);
  const songValue = Form.useWatch("song", form);

  async function getData() {
    const options = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await axios.get(
      `${Api.Lyrics}/${artistValue}/${songValue}`,
      options
    );
    setLyrics(response.data);
  }

  const SearchForLyrics = () => {
    getData();
    if (!lyrics) {
      setContent(<Empty />);
    } else {
      setContent(<Typography> {lyrics.lyrics} </Typography>);
    }
    openModal();
    return <></>;
  };

  const createForm = () => {
    return (
      <Form layout="vertical" form={form}>
        <Form.Item required name="artist" label={Text.LyricsFormInputArtist}>
          <Input />
        </Form.Item>
        <Form.Item required name="song" label={Text.LyricsFormInputSong}>
          <Input />
        </Form.Item>
        <Button onClick={SearchForLyrics}>{Text.LyricsFormButton}</Button>
        <Modal
          onCancel={closeModal}
          onOk={closeModal}
          visible={isVisible}
          title={Text.LyricsModalHeading}
        >
          {content}
        </Modal>
      </Form>
    );
  };

  return (
    <DashboardItem
      hide={hide}
      title={Text.LyricsHeading}
      description={createForm()}
    />
  );
};

export default LyricsDashboardItem;
