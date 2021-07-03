
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter:string = useSelector((state: any) => state.filter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={(evt) =>
        dispatch({
          type: 'SET_FILTER',
          payload: evt.target.value,
        })
      }
    />
  );
};

export default PokemonFilter;
