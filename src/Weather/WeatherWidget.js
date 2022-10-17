import { Component } from "react";

class WeatherWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location == prevProps.location) return;

        console.log('component updated');

        fetch(`http://api.weatherstack.com/current?access_key=907c79d8ea30109950f12b6b8352390e&query=${this.props.location}&units=m`)
            .then(res => res.json())
            .then(obj => this.setState({ data: obj }));
    }

    render() {
        if (!this.state.data) return <></>;

        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">
                        {this.state.data.location.name}
                    </h4>
                    {this.state.data.location.localtime}
                </div>
                <div className="card-body">
                    <img src={this.state.data.current.weather_icons[0]} width="64" />
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Temperature: {this.state.data.current.temperature} °C</li>
                        <li className="list-group-item">{this.state.data.current.weather_descriptions[0]}</li>
                        <li className="list-group-item">Wind: {this.state.data.current.wind_speed} {this.state.data.current.wind_dir}</li>
                        <li className="list-group-item">Humidity: {this.state.data.current.humidity}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default WeatherWidget;