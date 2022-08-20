import { Checkbox, List, Modal } from "antd";
import Text from "@constants/Text";
import { DashboardItemsState } from "@interfaces/interfaces";

interface CustomiseModalProps {
  isVisible: boolean;
  dashboardItems: DashboardItemsState;
  setState: (dashboardItems: DashboardItemsState) => void;
  closeModal: () => void;
}

const CustomiseModal = (props: CustomiseModalProps) => {
  const onYearFactChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideYearFactItem: !props.dashboardItems.hideYearFactItem,
    });
  };

  const onCatFactChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideCatFactItem: !props.dashboardItems.hideCatFactItem,
    });
  };

  const onFoxChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideFoxItem: !props.dashboardItems.hideFoxItem,
    });
  };

  const onProgQuoteChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideProgrammingItem: !props.dashboardItems.hideProgrammingItem,
    });
  };

  const onAdviceChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideAdviceItem: !props.dashboardItems.hideAdviceItem,
    });
  };

  const onDadJokeChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideDadJokeItem: !props.dashboardItems.hideDadJokeItem,
    });
  };

  const onYesOrNoChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideYesOrNoItem: !props.dashboardItems.hideYesOrNoItem,
    });
  };

  const onLyricsChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideLyricsItem: !props.dashboardItems.hideLyricsItem,
    });
  };

  const onMusicPlayerChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideMusicPlayerItem: !props.dashboardItems.hideMusicPlayerItem,
    });
  };

  const onPokemonChange = () => {
    props.setState({
      ...props.dashboardItems,
      hidePokemonItem: !props.dashboardItems.hidePokemonItem,
    });
  };

  const onRPSChange = () => {
    props.setState({
      ...props.dashboardItems,
      hideRPSItem: !props.dashboardItems.hideRPSItem,
    });
  };

  const funcs = [
    onYearFactChange,
    onCatFactChange,
    onFoxChange,
    onProgQuoteChange,
    onAdviceChange,
    onDadJokeChange,
    onYesOrNoChange,
    onLyricsChange,
    onMusicPlayerChange,
    onPokemonChange,
    onRPSChange
  ];
  const headings = [
    Text.YearFactHeading,
    Text.CatFactHeading,
    Text.FoxImageHeading,
    Text.ProgrammingQuoteHeading,
    Text.AdviceHeading,
    Text.DadJokeHeading,
    Text.YesOrNoHeading,
    Text.LyricsHeading,
    Text.MusicPlayerHeading,
    Text.PokemonHeading,
    Text.RPSHeading
  ];


  const renderListItem = (onChange: () => void, heading: string, key:number) => {
    return (
      <List.Item key={key}>
        <Checkbox defaultChecked onClick={onChange}>
          {heading}
        </Checkbox>
      </List.Item>
    );
  };

  const renderList = (funcs:any[], headings:string[]) => {
    let listItems = [];
    if(funcs.length === headings.length){
      for(let i = 0; i < funcs.length; i++){
        const newListItem = renderListItem(funcs[i], headings[i], i)
        listItems.push(newListItem)
    }
    }
    return <List itemLayout="vertical">{
      listItems.map((item)=> {
        return item;
      })
    }</List>;
  };

  return (
    <Modal
      title={Text.CustomiseModalMessage}
      visible={props.isVisible}
      onOk={props.closeModal}
      onCancel={props.closeModal}
    >
      {renderList(funcs, headings)}
    </Modal>
  );
};

export default CustomiseModal;
