import { useDispatch, useSelector } from 'react-redux';
import { Pokemon } from '../types';

import PokemonRow from './PokemonRow';


const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemons:Pokemon[] = useSelector((state: any) => state.pokemons);
  const filter:string = useSelector((state: any) => state.filter);

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemons
          .filter((pokemon) =>
            pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onSelect={() =>
                dispatch({ type: 'SET_SELECTED_POKEMON', payload: pokemon })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
