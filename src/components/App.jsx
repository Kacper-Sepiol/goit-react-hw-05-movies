import { Link, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { useState, useEffect } from 'react';

export const App = () => {
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
        const filteredFilms = response.results.filter(
          (film, index) => index !== 20
        );
        setFilms(filteredFilms);
        console.log(filteredFilms);
      })
      .catch(err => console.error(err));
  }, [apiUrl]);

  return (
    <>
      <div>
        <Link to="/">Home</Link>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to="/movies">{film.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
