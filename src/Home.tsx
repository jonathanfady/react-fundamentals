import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Home.css'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className="text-center">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <button className="m-2 btn btn-primary" onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p className="p-4 h5">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default Home
