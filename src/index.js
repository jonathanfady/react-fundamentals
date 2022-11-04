import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import Home from './Home';
import Counter from './Counter';
import Todos from './Todos/Todos';
import Weather from './Weather/Weather';
import News from './News';
import Calculator from './Calculator/Calculator';
import Chess from './Chess/Chess';
import Pokemons from './Pokemon/Pokemons';
import CurrencyConverter from './CurrencyConverter/CurrencyConverter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/news" element={<News />} >
                        <Route path=":newsTopic" element={<News />} />
                    </Route>
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/chess" element={<Chess />} />
                    <Route path="/pokemon" element={<Pokemons />} />
                    <Route path="/currency-converter" element={<CurrencyConverter />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
)