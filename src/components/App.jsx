import { Link, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './appStyle.module.css/appStyle.module.css';

const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/cast/Cast'));
const Reviews = lazy(() => import('../pages/reviews/Reviews'));

export const App = () => {
  return (
    <>
      <div>
        <Link to="/" className={css.linkApp}>
          Home
        </Link>
        <Link to="/movies" className={css.linkApp}>
          Movies
        </Link>

        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/Reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
