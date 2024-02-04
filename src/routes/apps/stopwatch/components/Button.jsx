const Button = (props) => (
  <button className="btn btn-outline-light w-100" onClick={props.onClick}>
    {props.text}
  </button>
);
export default Button;
