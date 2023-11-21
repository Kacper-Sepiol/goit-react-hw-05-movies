import { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import css from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const apiKey = '493ca07ced65ee69b94ce62a3e3db755';

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    )
      .then(response => response.json())
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => console.error('Error fetching cast:', error));
  }, [movieId]);

  return (
    <div>
      <Link to={location.state.from} className={css.backButton}>
        Back
      </Link>

      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Cast;
