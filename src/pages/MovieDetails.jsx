import { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route, Outlet } from 'react-router-dom';
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
      <header>
        <h1>{movieDetails.title}</h1>
        <h3>Overview:</h3>
        <h4>{movieDetails.overview}</h4>
        <h3>run time:</h3>
        <h4>{movieDetails.runtime}</h4>
        <p>Additional information</p>
        <nav>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <br />
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
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
