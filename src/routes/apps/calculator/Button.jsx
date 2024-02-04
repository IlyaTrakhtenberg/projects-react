const Button = (props) => (
  <div className="col-3 p-0 calc-cell">
    <button
      className="but"
      onClick={props.onClick}
      style={{ color: props.color, border: "2px solid" + props.color }}
    >
      {props.symbol}
    </button>
  </div>
);
export default Button;
