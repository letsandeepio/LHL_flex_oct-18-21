import React from 'react'
import useQuery from './hooks/useQuery';

const CharacterList = () => {
    const { loading, data, error } = useQuery(
     'https://rickandmortyapi.com/api/character'
    );
  return (
    <>
      <div>CharacterList</div>
      {loading && <p>Loading...</p>}
      <ul>
        {data &&
          data.results.map((character) => {
            return (
              <li key={character.id}>
                {character.status} - {character.name}
              </li>
            );
          })}
      </ul>
      {error && <p>Error</p>}
    </>
  );
}

export default CharacterList