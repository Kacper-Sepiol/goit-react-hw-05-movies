import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const apiKey = '493ca07ced65ee69b94ce62a3e3db755';

    if (movieId) {
      console.log('movieId nie jest zjebany');
    }

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
