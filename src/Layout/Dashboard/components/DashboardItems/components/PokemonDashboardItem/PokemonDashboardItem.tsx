import Text from "@constants/Text";
import { DashboardApiItemProps } from "@interfaces/interfaces";
import { Image, Table } from "antd";
import { RedoOutlined } from "@ant-design/icons";
import DashboardItem from "../DashboardItem/DashboardItem";
import { useState } from "react";
const pokemon = require("pokemon");
const Pokedex = require("pokedex"),
  pokedex = new Pokedex();

type PokemonData = {
  name: string;
  sprites: {
    animated: string;
  };
  species_id: number;
};

const PokemonDashboardItem = (props: DashboardApiItemProps) => {
  const hide = props.hide ?? false;
  let randomPokemon = pokemon.random();
  let info: PokemonData = pokedex.pokemon(randomPokemon.toLowerCase());

  const getNewPokemon = () => {
    randomPokemon = pokemon.random();
    info = pokedex.pokemon(randomPokemon.toLowerCase());
    return info;
  };

  const [currentPokemon, setNewPokemon] = useState(info);

  // pokemon data from pokedex is sometimes undefined since some data is missing so we check and set a new one if that happens
  const checkPokemonExists = (poke: PokemonData) => {
    if (poke === undefined || poke.sprites === undefined) {
      setNewPokemon(getNewPokemon());
    }
  };

  checkPokemonExists(info);

  const capitaliseWord = (word: string) => {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
  };

  const refreshPokemon = () => {
    info = getNewPokemon();
    checkPokemonExists(info);
    setNewPokemon(info);
  };

  const renderTable = () => {
    return (
      <Table
        className="pokemonTable"
        bordered={false}
        pagination={false}
        title={() => <Image src={currentPokemon.sprites.animated} />}
        columns={[
          {
            title: Text.PokemonNameHeading,
            align: "center",
            dataIndex: "name",
          },
          { title: Text.PokemonNumHeading, align: "center", dataIndex: "num" },
        ]}
        dataSource={[
          {
            key: "1",
            name: capitaliseWord(currentPokemon.name),
            num: currentPokemon.species_id,
          },
        ]}
      ></Table>
    );
  };

  return (
    <DashboardItem
      hide={hide}
      title={Text.PokemonHeading}
      description={renderTable()}
      actions={[<RedoOutlined onClick={refreshPokemon} />]}
    />
  );
};

export default PokemonDashboardItem;
