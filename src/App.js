import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function App(props) {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Outlet />
            </div>
        </>
    )
}