import { useSelector } from "react-redux";
import { Pokemon } from "../types";

const PokemonInfo = () => {
  const selectedPokemon:Pokemon = useSelector((state: any) => state.selectedPokemon);

  return selectedPokemon ? (
    <div>
      <h1>{selectedPokemon.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{(selectedPokemon as any).base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default PokemonInfo;
