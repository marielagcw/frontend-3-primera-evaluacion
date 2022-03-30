import React from "react";
import Historia from "./components/Historia";
import Opcion from "./components/Opcion";
import Recordatorio from "./components/Recordatorio";
import data from "./components/data.json";
import Swal from "sweetalert2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      history: data[0].historia,
      optionA: "A",
      optionB: "B",
      h2A: data[0].opciones.a,
      h2B: data[0].opciones.b,
      contador: 2,
    };
  }
  componentDidMount() {
    Swal.fire({
      title: "Holis!! Elige tu propia aventura!",
      confirmButtonText: "Vamos!",
      width: 600,
      padding: "3em",
      color: "#fff",
      background:
        "#000 url(https://sweetalert2.github.io/#examplesimages/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/#examplesimages/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  }
  setearEstado = (element) => {
    this.setState({
      history: element.historia,
      h2A: element.opciones.a,
      h2B: element.opciones.b,
    });
  };
  handlerClick = (opcioneElegida) => {
    this.setState({ contador: this.state.contador + 1,
    historial: this.state.historial.concat([opcioneElegida])})
    console.log(this.state.historial.concat([opcioneElegida]))
    let idElegido =
      this.state.contador.toString() + opcioneElegida.toLowerCase();
    if (opcioneElegida === "A") {
      this.setearEstado(data.find((element) => element.id === idElegido));
    }
    if (opcioneElegida === "B") {
      this.setearEstado(data.find((element) => element.id === idElegido));
    }
  };
  componentDidUpdate(){
    if(this.state.historial.length >4){
      this.setState({
        historial: [],
      history: data[0].historia,
      optionA: "A",
      optionB: "B",
      h2A: data[0].opciones.a,
      h2B: data[0].opciones.b,
      contador: 2,
      })
      Swal.fire({
        title: "Fin 😅 ",
        confirmButtonText: "Vamos de nuevo",
        width: 600,
        padding: "3em",
        color: "#fff",
        background:
          "#000 url(https://sweetalert2.github.io/#examplesimages/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/#examplesimages/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="layout">
          <Historia history={this.state.history} />
          <div className="opciones">
            <Opcion
              option={this.state.optionA}
              h2={this.state.h2A}
              onClick={() => this.handlerClick("A")}
            />
            <Opcion
              option={this.state.optionB}
              h2={this.state.h2B}
              onClick={() => this.handlerClick("B")}
            />
          </div>
          <Recordatorio
            anterior={this.state.historial[this.state.historial.length - 1]}
            historialCompleto={this.state.historial.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          />
        </div>
      </div>
    );
  }
}

export default App;
