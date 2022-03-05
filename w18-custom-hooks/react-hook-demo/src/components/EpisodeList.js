import React, { useEffect, useState } from 'react';
import useQuery from './hooks/useQuery';

const EpisodeList = () => {
 
  const { loading, data, error } = useQuery(
    'https://rickandmortyapi.com/api/episode'
  );

  return (
    <>
      <div>EpisodeList</div>
      {loading && <p>Loading...</p>}
      <ul>
        {data &&
          data.results.map((episode) => {
            return <li key={episode.id}>{episode.episode} - {episode.name}</li>;
          })}
      </ul>
      {error && <p>Error</p>}
    </>
  );
};

export default EpisodeList;
