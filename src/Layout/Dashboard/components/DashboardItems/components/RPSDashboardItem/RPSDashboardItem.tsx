import Text from "@constants/Text";
import {
  RedoOutlined,
  FileOutlined,
  BuildOutlined,
  ScissorOutlined,
} from "@ant-design/icons";

import DashboardItem from "../DashboardItem/DashboardItem";
import { DashboardApiItemProps } from "@interfaces/interfaces";
import { useState } from "react";
import { Space, Typography } from "antd";

type Move = "rock" | "paper" | "scissors";
type Winner = "player" | "computer" | "tie";

const RPSDashboardItem = (props: DashboardApiItemProps) => {
  const hide = props.hide ?? false;
  const [playerMove, setPlayerMove] = useState<Move>("paper");
  const [hasChosenMove, setHasChosenMove] = useState(false);
  const [winner, setWinner] = useState<Winner>("tie");

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  const generateComputerMove = () => {
    const randomNum = getRandomNumber();
    let move: Move = "rock";
    if (randomNum === 0) {
      move = "rock";
    } else if (randomNum === 2) {
      move = "paper";
    } else {
      move = "scissors";
    }
    return move;
  };

  const determineWinner = (playerChoice: Move) => {
    const computerChoice = generateComputerMove();
    if (playerChoice === computerChoice) {
      setWinner("tie");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      setWinner("player");
    } else if (computerChoice === "paper" && playerChoice === "rock") {
      setWinner("computer");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      setWinner("player");
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
      setWinner("computer");
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      setWinner("player");
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
      setWinner("computer");
    }
  };

  const playerChoice = (move: Move) => {
    setPlayerMove(move);
    setHasChosenMove(true);
    determineWinner(move);
  };

  const resetGame = () => {
    setHasChosenMove(false);
  };


  const renderWinner = () => {
    return (
      <>
      <Space className="fullWidth" direction="vertical" size="middle" align="center">
        <Typography>
          {winner === "computer" ? Text.RPSLoseMessage : ""}
          {winner === "player" ? Text.RPSWinMessage : ""}
          {winner === "tie" ? Text.RPSTieMessage : ""}
          </Typography>
          <div> {Text.RPSPlayAgainMessage} <RedoOutlined onClick={resetGame} /></div>
        </Space>
      </>
    );
  };

  const renderWantToPlay = () => {
    return (
      <>
      <Space className="fullWidth" direction="vertical" size="middle" align="center">
        <Typography> {Text.RPSPlayMessage} </Typography>
        <Typography> {Text.RPSOptionsMessage} </Typography>
        </Space>
      </>
    );
  };

  const renderCardContent = () => {
    return <>{!hasChosenMove ? renderWantToPlay() : renderWinner()}</>;
  };


  const renderWithoutActions = () => {
    return (
      <DashboardItem
        hide={hide}
        title={Text.RPSHeading}
        description={renderCardContent()}
      />
    );
  };

  const renderWithActions = () => {
    const actions = [
      <BuildOutlined onClick={() => playerChoice("rock")} />,
      <FileOutlined onClick={() => playerChoice("paper")} />,
      <ScissorOutlined onClick={() => playerChoice("scissors")} />,
    ];

    return (
      <DashboardItem
        actions={actions}
        hide={hide}
        title={Text.RPSHeading}
        description={renderCardContent()}
      />
    );
  };

  return <>{!hasChosenMove ? renderWithActions() : renderWithoutActions()}</>;
};

export default RPSDashboardItem;
