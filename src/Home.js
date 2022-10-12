import logo from './logo.svg';
import './Home.css';

export default function Home(props) {
    return (
        <>
            <div className="text-center">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="text-center">
                <a
                    className="h2"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        </>
    )
}