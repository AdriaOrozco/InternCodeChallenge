import './App.css';
import './index';
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <Canciones canciones={this.state.canciones} />
        )
    }

    state = {
        canciones: []
    };

    componentDidMount() {
        fetch('https://gj05ju1755.execute-api.eu-west-1.amazonaws.com/dev/codechallenge/music/random')
            .then(res => res.json())
            .then((data) => {
                this.setState({ canciones: data["items"] })
            })
            .catch(console.log)
    }
}
const Canciones = ({canciones}) => {
    return (
        <div>
            <center><h1>Canciones</h1></center>
            {canciones.map((canciones) => (
                <div>
                    <div>
                        <h5 id={canciones.id}>{canciones.name}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default App;
