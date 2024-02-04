const OptionsButton = (props) => (
  <div className="col">
    <button
      className="btn btn-outline-light w-100 h-100"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  </div>
);
export default OptionsButton;
