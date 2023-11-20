import { Link, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>

        <Routes>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path="/" exact element={<Home />} />
            <Route path="/movies" exact element={<Movies />} />
            <Route path="/movies/:movieId" exact element={<MovieDetails />} />
          </Suspense>
        </Routes>
      </div>
    </>
  );
};
