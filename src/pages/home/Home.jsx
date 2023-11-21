import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './homeStyle.module.css';

const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`;
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        const filteredFilms = response.results
          .filter((film, index) => index !== 20)
          .filter(film => film.title);
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
          <li key={movie.id} className={css.listItem}>
            <Link
              to={`/movies/${movie.id}`}
              className={css.linkListItem}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
