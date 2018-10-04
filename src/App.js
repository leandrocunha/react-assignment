import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/competitions')
            .then(body => body.json())
            .then((res) => {
                const areas = res.competitions
                    .map(item => item.area.name)
                    .filter((value, index, self) => self.indexOf(value) === index);
                this.setState({ loading: false, areas });
            });
    }

    render() {
        const { areas, loading } = this.state;
        return (
            <div className="App">
                {loading ? (
                    <p>loading...</p>
                ) : (
                    <ul>
                        {areas.map(area => (
                            <li key={area}>
                                <button>{area}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default App;
