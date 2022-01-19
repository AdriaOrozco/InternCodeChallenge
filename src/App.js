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
        <div className="FondoCanciones">
                <h1 id="Titulo">Canciones</h1>
            <table>
                <tr><th id="col1" colSpan="2">TÍTULO</th>
                    <th id="col2">ÁLBUM</th>
                    <th id="col3">DURACIÓN</th></tr>
                <br></br>
                {canciones.map((canciones) => (
                <tr id={canciones.id}><td><img src={canciones.album.images[2].url} /></td>
                    <td className="NombreCanciones"><tr id="nombreCancion">{canciones.name}</tr>
                        <tr id="artist">{mostrarArtistas(canciones)}</tr>
                    </td>
                    <td id="album">{canciones.album.name}</td>
                    <td id="duration">{pasoASec(canciones.duration_ms)}</td>
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
        }}
    return cadena;
}
function pasoASec (millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

export default App;
