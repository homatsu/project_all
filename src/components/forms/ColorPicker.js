import React, { Component } from "react";
import PropTypes from "prop-types";

export class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      color: "",
      click: false
    };
  }

  componentDidMount() {
    let canvas = this.canvasRef.current;
    let ctx = canvas.getContext("2d");

    console.log(canvas.width);

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

    gradient.addColorStop(0, "rgb(255, 0, 0)");
    gradient.addColorStop(0.15, "rgb(255, 0, 255)");
    gradient.addColorStop(0.33, "rgb(0, 0, 255)");
    gradient.addColorStop(0.49, "rgb(0, 255, 255)");
    gradient.addColorStop(0.67, "rgb(0, 255, 0)");
    gradient.addColorStop(0.84, "rgb(255, 255, 0)");
    gradient.addColorStop(1, "rgb(255, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  convertToHex = nonHexColorString => {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = nonHexColorString;
    return ctx.fillStyle;
  };

  handleMove = e => {
    const { click } = this.state;
    if (click) {
      let canvas = this.canvasRef.current;
      let ctx = canvas.getContext("2d");
      let canvasPos = e.target.getBoundingClientRect();
      let y = e.clientY - canvasPos.top;
      let x = e.clientX - canvasPos.left;

      let imageData = ctx.getImageData(x, y, 1, 1);
      let color =
        "rgb(" +
        imageData.data[0] +
        ", " +
        imageData.data[1] +
        ", " +
        imageData.data[2] +
        ")";

      ctx.fillStyle = color;
      this.props.handleChange(ctx.fillStyle);
    }
  };

  render() {
    return (
      <div className="colorPickerDiv">
        <canvas
          ref={this.canvasRef}
          width={400}
          height={150}
          className="canvasColorPicker"
          onMouseMove={this.handleMove}
          onMouseDown={() => this.setState({ click: true })}
          onMouseUp={() => this.setState({ click: false })}
          onMouseLeave={() => this.setState({ click: false })}
        />
        <div
          className="colorDisplay"
          style={{ backgroundColor: this.props.color }}
        >
          {this.props.color}
        </div>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default ColorPicker;
