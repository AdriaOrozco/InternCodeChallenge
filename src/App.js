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
                console.log(data["items"]);
                this.setState({ canciones: data["items"] })
            })
            .catch(console.log)
    }
}
const Canciones = ({canciones}) => {
    return (
        <div>
            <center><h1>Canciones</h1></center>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Artistas</th>

                </tr>
                {canciones.map((canciones) => (
                <tr id={canciones.id}>
                    <td>{canciones.name}</td>
                    <td>{mostrarArtistas(canciones)}</td>
                </tr>
                ))}
            </table>
        </div>
    )
};

function mostrarArtistas(canciones){
    var cadena="";
    for (var i = 0; i < canciones.artists.length; i++) {
        if(i==0){
            cadena=canciones.artists[i].name;
        }else {
            cadena = cadena + ", " + canciones.artists[i].name;
        }
    }
    return cadena;
}

export default App;
