import lofi from "@assets/music/lofi.mp3";
import punk from "@assets/music/punk.mp3";
import rock from "@assets/music/rock.mp3";

import { Segmented, Space } from "antd";
import { useState } from "react";

const MusicPlayer = () => {
  const [genre, setGenre] = useState("Rock");

  const createRockPlayer = () => {
    return (
      <audio controls controlsList="nodownload">
        <source src={rock} type="audio/mpeg" />
      </audio>
    );
  };

  const createLofiPlayer = () => {
    return (
      <audio controls controlsList="nodownload">
        <source src={lofi} type="audio/mpeg" />
      </audio>
    );
  };

  const createPunkPlayer = () => {
    return (
      <audio controls controlsList="nodownload">
        <source src={punk} type="audio/mpeg" />
      </audio>
    );
  };

  const onChange = (value: string | number) => {
    console.log(value);
    if (value === "Rock") {
      setGenre("Rock");
    } else if (value === "Punk") {
      setGenre("Punk");
    } else {
      setGenre("Lofi");
    }

    return value;
  };

  return (
    <>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Segmented
          block
          onChange={onChange}
          options={["Rock", "Lofi", "Punk"]}
        />
        {genre === "Rock" ? createRockPlayer() : ""}
        {genre === "Lofi" ? createLofiPlayer() : ""}
        {genre === "Punk" ? createPunkPlayer() : ""}
      </Space>
    </>
  );
};

export default MusicPlayer;
