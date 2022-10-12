import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toKebab } from './Cases';

export default function Navbar(props) {
    const [news, setNews] = useState('');
    const newsTopic = useRef(null);

    function handleNewsTopicFromSubmit(e) {
        e.preventDefault();
        document.getElementById('newsTopicLink').click();
    }

    function handleNewsTopicChange() {
        setNews(toKebab(newsTopic.current.value));
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">React Fundamentals</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/counter" className="nav-link">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/weather" className="nav-link">Weather App</Link>
                        </li>
                        <form className="d-flex ms-2" role="search" onSubmit={handleNewsTopicFromSubmit}>
                            <div className="input-group border border-2 rounded border-primary">
                                <span className="input-group-text text-primary" id="basic-addon1">Search the news</span>
                                <input className="form-control" type="text" placeholder="News topic" aria-label="Search" ref={newsTopic} onChange={handleNewsTopicChange} />
                                <Link id="newsTopicLink" to={`/news/${news}`} className="btn btn-light"><i className="bi bi-search text-primary"></i></Link>
                            </div>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
    )
}