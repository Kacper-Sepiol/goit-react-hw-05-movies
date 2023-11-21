import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './movieDetails.module.css';

const Cast = lazy(() => import('../cast/Cast'));
const Reviews = lazy(() => import('../reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    // zapytanie o film
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [movieId]);

  return (
    <div>
      <header>
        <h1>{movieDetails.title}</h1>
        <h3>Overview:</h3>
        <h4>{movieDetails.overview}</h4>
        <h3>run time:</h3>
        <h4>{movieDetails.runtime}</h4>
        <p>Additional information</p>
        <nav>
          <Link
            to={`/movies/${movieId}/cast`}
            state={{ from: location }}
            className={css.linkMovieDetails}
          >
            Cast
          </Link>
          <br />
          <Link
            to={`/movies/${movieId}/reviews`}
            state={{ from: location }}
            className={css.linkMovieDetails}
          >
            Reviews
          </Link>
        </nav>
      </header>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={`/${movieId}/cast`} element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
