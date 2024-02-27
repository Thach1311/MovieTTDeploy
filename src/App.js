import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import { MovieProvider } from './components/Middle/MovieProvider';
import { useState } from 'react';
function App() {
    const [pathSlug, setPathSlug] = useState();

    return (
        <BrowserRouter>
            <MovieProvider>
                <Routes>
                    <Route path="" element={<Home value={{ pathSlug, setPathSlug }} />} />
                    <Route path={`/${pathSlug}`} element={<Movie value={{ pathSlug, setPathSlug }} />}></Route>
                </Routes>
            </MovieProvider>
        </BrowserRouter>
    );
}

export default App;
