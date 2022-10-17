import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toKebab } from './Cases';

export default function Navbar(props) {
    const [news, setNews] = useState('');
    const newsTopic = useRef(null);

    function handleNewsTopicFormSubmit(e) {
        e.preventDefault();
        document.getElementById('newsTopicLink').click();
    }

    function handleNewsTopicChange() {
        setNews(toKebab(newsTopic.current.value));
    }

    function handleNewsTopicLinkClick() {
        newsTopic.current.value = "";
        newsTopic.current.focus();
        setNews("");
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
                            <Link to="/counter" className="nav-link"><i className="bi bi-plus-slash-minus"></i> Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/todos" className="nav-link"><i className="bi bi-card-checklist"></i> Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/weather" className="nav-link"><i className="bi bi-cloud-sun"></i> Weather</Link>
                        </li>
                        <form className="d-flex mx-2" role="search" onSubmit={handleNewsTopicFormSubmit}>
                            <div className="input-group border border-3 border-primary rounded-3">
                                <Link to="/news" className="btn btn-secondary rounded-start"><i className="bi bi-newspaper text-light"></i></Link>
                                <input className="form-control" type="text" placeholder="Search the news" aria-label="Search" ref={newsTopic} onChange={handleNewsTopicChange} />
                                <Link id="newsTopicLink" to={`/news/${news}`} className="btn btn-secondary rounded-end" onClick={handleNewsTopicLinkClick}><i className="bi bi-search text-light"></i></Link>
                            </div>
                        </form>
                        <li className="nav-item">
                            <Link to="/calculator" className="nav-link"><i className="bi bi-calculator"></i> Calculator</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}