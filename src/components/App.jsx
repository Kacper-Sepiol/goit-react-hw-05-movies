import { Link, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
