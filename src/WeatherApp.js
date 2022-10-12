import { useState, useRef } from 'react';
import WeatherWidget from './WeatherWidgetClass';

function WeatherApp() {
    const [location, setLocation] = useState('');
    const locationInput = useRef(null);

    function handleClick(e) {
        e.preventDefault();

        setLocation(locationInput.current.value);
    }

    return (
        <>
            <h5>Weather from <a href="http://api.weatherstack.com/" target="_blank">http://api.weatherstack.com/</a></h5>
            <div className="row justify-content-center g-2">
                <form className="row justify-content-center g-2">
                    <div className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            ref={locationInput}
                        />
                    </div>
                    <div className="col-4">
                        <button
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Get
                        </button>
                    </div>
                </form>
                <div className="col-8">
                    <WeatherWidget location={location} />
                </div>
            </div>
        </>
    )

}

export default WeatherApp;