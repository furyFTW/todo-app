import { useEffect } from 'react';
import { createStore, AnyAction } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';
import { Pokemon } from './types';

import './App.css';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';
import PokemonFilter from './components/PokemonFilter';

const initState = {
  pokemons: [],
  filter: '',
  selectedPokemon: null,
};

const PokemonReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(PokemonReducer);

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rems;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: any) => state.pokemons);

  useEffect(() => {
    fetch('/todo-app/pokemone.json')
      .then((resp) => resp.json())
      .then((data: Pokemon[]) =>
        dispatch({
          type: 'SET_POKEMON',
          payload: data,
        })
      );
  }, [dispatch]);

  if (!pokemons) {
    return <Title>Loading</Title>;
  }

  return (
    <PageContainer>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </PageContainer>
  );
}

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;
