import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const apiKey = '493ca07ced65ee69b94ce62a3e3db755';
  const apiUrl = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        const filteredFilms = response.results.filter(
          (film, index) => index !== 20
        );
        setFilms(filteredFilms);
      })
      .catch(err => console.error(err));
  }, [apiUrl]);

  // strona domowa z list popularnych filmow

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {films.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
