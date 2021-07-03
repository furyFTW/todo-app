import React from 'react';
import { Button } from '@material-ui/core';
import { Pokemon } from '../types';

interface Props {
  pokemon: Pokemon;
  onSelect: Function;
}

const PokemonRow: React.FC<Props> = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td>
      <Button variant="contained" color="primary" onClick={() => onSelect(pokemon)}>
        Select!
      </Button>
    </td>
  </tr>
);

export default PokemonRow;