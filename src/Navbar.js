import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toKebab } from './Cases';

export default function Navbar(props) {
    const newsTopic = useRef();
    const navigate = useNavigate();

    function handleNewsTopicInputKeyUp(e) {
        if (e.key === "Enter") {
            handleNewsTopicButtonClick();
        }
    }

    function handleNewsTopicButtonClick() {
        navigate(`/news/${toKebab(newsTopic.current.value || "")}`);
        newsTopic.current.value = "";
        newsTopic.current.focus();
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
                        <li className="nav-item">
                            <div className="input-group border border-3 border-primary rounded-3">
                                <Link to="/news" className="btn btn-secondary rounded-start"><i className="bi bi-newspaper text-light"></i></Link>
                                <input ref={newsTopic} className="form-control" type="text" placeholder="Search the news" aria-label="Search" onKeyUp={handleNewsTopicInputKeyUp} />
                                <button className="btn btn-secondary rounded-end" type="submit" onClick={handleNewsTopicButtonClick}>
                                    <i className="bi bi-search text-light"></i>
                                </button>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/calculator" className="nav-link"><i className="bi bi-calculator"></i> Calculator</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chess" className="nav-link"><i className="bi bi-joystick"></i> Chess</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pokemon" className="nav-link"><i className="bi bi-nintendo-switch"></i> Pokemon</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}