import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import Home from './Home';
import Counter from './Counter';
import Todos from './Todos';
import WeatherApp from './WeatherApp';
import News from './News';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/weather" element={<WeatherApp />} />
                    <Route path="/news">
                        <Route path=":newsTopic" element={<News />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
)