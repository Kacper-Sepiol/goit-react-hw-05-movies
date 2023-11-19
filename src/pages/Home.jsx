import { useState, useEffect } from 'react';

export const Home = () => {
  const apiKey = '493ca07ced65ee69b94ce62a3e3db755';
  const apiUrl = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`;
  const [films, setFilms] = useState([]);

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //     },
  //   };

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        setFilms(response.results[0]);
      })
      .catch(err => console.error(err));
  }, [apiUrl]);

  console.log(films);

  // strona domowa z list popularnych filmow

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        <li key={films.key}>{films.results}</li>
      </ul>
    </div>
  );
};
