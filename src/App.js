import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/competitions')
            .then(body => body.json())
            .then((res) => {
                const netherlands = res.competitions.filter(competition => competition.area.name === 'Netherlands');
                this.setState({ loading: false, competitions: netherlands });
            });
    }

    render() {
        const { competitions, loading } = this.state;
        return (
            <div className="App">
                {loading ? (
                    <p>loading...</p>
                ) : (
                    <select>
                        {competitions.map(competition => (
                            <option>{competition.name}</option>
                        ))}
                    </select>
                )}
            </div>
        );
    }
}

export default App;
