import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="movies" element={<MoviesPage/>} >
        <Route path=":number" element={<MoviesPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
