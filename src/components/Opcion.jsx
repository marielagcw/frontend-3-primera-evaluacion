import React from "react";

class Opcion extends React.Component {
  render() {
    return (
        <div className="opcion">
          <button
            id={this.props.option}
            className="botones"
            onClick={() =>this.props.onClick()}
          >
            {this.props.option}
          </button>
          <h2> {this.props.h2}</h2>
        </div>
    );
  }
}
export default Opcion;
