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
        <div class="FondoCanciones">
            <h1 id="Titulo">Canciones</h1>
            <table>
                <tr>
                    <th colSpan="2">Título</th>
                </tr>
                {canciones.map((canciones) => (
                <tr id={canciones.id}>
                    <td><img src={canciones.album.images[2].url} /></td>
                    <td>
                        <tr>{canciones.name}</tr>
                        <tr>{mostrarArtistas(canciones)}</tr>
                    </td>
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
