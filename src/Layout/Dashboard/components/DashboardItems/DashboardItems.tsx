import { useKey } from "@hooks/hooks";
import { DashboardItemsState, Note } from "@interfaces/interfaces";
import AdviceDashboardItem from "./components/AdviceDashboardItem/AdviceDashboardItem";
import CatFactDashboardItem from "./components/CatFactDashboardItem/CatFactDashboardItem";
import DadJokeDashboardItem from "./components/DadJokeDashboardItem/DadJokeDashboardItem";
import FoxDashboardItem from "./components/FoxDashboardItem/FoxDashboardItem";
import LyricsDashboardItem from "./components/LyricsDashboardItem/LyricsDashboardItem";
import ProgrammingQuoteDashboardItem from "./components/ProgrammingQuoteDashboardItem/ProgrammingQuoteDashboardItem";
import YearDashboardItem from "./components/YearDashboardItem/YearDashboardItem";
import YesOrNoDashboardItem from "./components/YesOrNoDashboardItem/YesOrNoDashboardItem";
import { Typography } from "antd";
import MusicPlayerDashboardItem from "./components/MusicPlayerDashboardItem/MusicPlayerDashboardItem";
import Customise from "../Customise/Customise";
import PokemonDashboardItem from "./components/PokemonDashboardItem/PokemonDashboardItem";
import RPSDashboardItem from "./components/RPSDashboardItem/RPSDashboardItem";
import { useState } from "react";
import CreateNoteModal from "./components/CreateNoteModal/CreateNoteModal";
import { Key } from "w3c-keys";
import NoteDashboardItems from "./components/NoteDashboardItems/NoteDashboardItems";
const { Text, Link } = Typography;

interface DashboardItemsProps {
  display: DashboardItemsState;
  setDashboardItems: (dashboardItems: DashboardItemsState) => void;
}

const DashboardItems = (props: DashboardItemsProps) => {
  const [noteModalVisible, setNoteModalVisible] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  const handleKeyDown = () => {
    setNoteModalVisible(true);
  };

  const deleteNote = (id: number) => {
    const reducedArr = [...notes];
    reducedArr.splice(id, 1);
    setNotes(reducedArr);
  };

  const createNewNote = (title: string, content: string) => {
    const newNote: Note = { title: title, content: content };
    setNotes((notes) => [...notes, newNote]);
  };

  useKey(Key.PlusSign, handleKeyDown);

  const checkVisibility = () => {
    let count = 0;
    for (let [key, value] of Object.entries(props.display)) {
      if (value) {
        count++;
      }
    }
    if (Object.entries(props.display).length === count) {
      return true;
    }
    return false;
  };

  const allDashboardItemsVisibility = checkVisibility();

  return (
    <>
      {allDashboardItemsVisibility && (
        <>
          <Text>
            Leave and{" "}
            <Link href="https://www.google.com/" target="_blank">
              find something else to do.{" "}
            </Link>{" "}
          </Text>
        </>
      )}

      <YearDashboardItem hide={props.display.hideYearFactItem} />
      <CatFactDashboardItem hide={props.display.hideCatFactItem} />
      <FoxDashboardItem hide={props.display.hideFoxItem} />
      <ProgrammingQuoteDashboardItem hide={props.display.hideProgrammingItem} />
      <AdviceDashboardItem hide={props.display.hideAdviceItem} />
      <DadJokeDashboardItem hide={props.display.hideDadJokeItem} />
      <YesOrNoDashboardItem hide={props.display.hideYesOrNoItem} />
      <LyricsDashboardItem hide={props.display.hideLyricsItem} />
      <MusicPlayerDashboardItem hide={props.display.hideMusicPlayerItem} />
      <PokemonDashboardItem hide={props.display.hidePokemonItem} />
      <RPSDashboardItem hide={props.display.hideRPSItem} />
      <NoteDashboardItems notes={notes} deleteNote={deleteNote} />

      <Customise
        dashboardItems={props.display}
        setDashboardItems={props.setDashboardItems}
      />

      <CreateNoteModal
        isVisible={noteModalVisible}
        createNote={createNewNote}
        closeModal={() => setNoteModalVisible(false)}
      />
    </>
  );
};

export default DashboardItems;
