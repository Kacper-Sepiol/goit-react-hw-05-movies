import { useState, useEffect } from 'react';

export const Home = () => {
  // const apiKey = '493ca07ced65ee69b94ce62a3e3db755';
  // const apiUrl = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`;
  // const [films, setFilms] = useState([]);

  // //   const options = {
  // //     method: 'GET',
  // //     headers: {
  // //       accept: 'application/json',
  // //     },
  // //   };

  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(response => {
  //       const filteredFilms = response.results.filter(
  //         (film, index) => index !== 20
  //       );
  //       setFilms(filteredFilms);
  //     })
  //     .catch(err => console.error(err));
  // }, [apiUrl]);

  // strona domowa z list popularnych filmow

  return (
    <div>
      <h1>Trending Today</h1>
      {/* <ul>
        {films.map(film => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul> */}
    </div>
  );
};
