import { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const apiKey = '493ca07ced65ee69b94ce62a3e3db755';

    // zapytanie o film
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [movieId]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <nav>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </nav>
      <Routes>
        <Route
          path="/movies/:movieId/cast"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Cast movieId={movieId} />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId/reviews"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Reviews movieId={movieId} />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default MovieDetails;
