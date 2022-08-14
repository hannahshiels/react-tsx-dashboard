import lofi from "@assets/music/lofi.mp3";
import punk from "@assets/music/punk.mp3";
import rock from "@assets/music/rock.mp3";
import Text from "@constants/Text"

import { Segmented, Space } from "antd";
import { useState } from "react";

const MusicPlayer = () => {
  const [genre, setGenre] = useState(Text.RockMusicGenre);
  const genres = [Text.RockMusicGenre, Text.LofiMusicGenre, Text.PunkMusicGenre]

  const createPlayer = (song:"mp3") => {
    return (
      <audio controls controlsList="nodownload">
        <source src={song} type="audio/mpeg" />
      </audio>
    );
  };

  const onChange = (value: string | number) => {
    if (value === Text.RockMusicGenre) {
      setGenre(Text.RockMusicGenre);
    } else if (value === Text.PunkMusicGenre) {
      setGenre(Text.PunkMusicGenre);
    } else {
      setGenre(Text.LofiMusicGenre);
    }

    return value;
  };

  return (
    <>
      <Space direction="vertical" size="large" className="fullWidth">
        <Segmented
          block
          onChange={onChange}
          options={genres}
        />
        {genre === Text.RockMusicGenre ? createPlayer(rock) : ""}
        {genre === Text.LofiMusicGenre ? createPlayer(lofi) : ""}
        {genre === Text.PunkMusicGenre ? createPlayer(punk) : ""}
      </Space>
    </>
  );
};

export default MusicPlayer;
