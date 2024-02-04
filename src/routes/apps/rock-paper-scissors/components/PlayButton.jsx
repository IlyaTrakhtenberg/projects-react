const PlayButton = (props) => (
  <div className="col-4 p-3 move-cont">
    <button className="play-button" onClick={props.onClick}>
      {props.icon}
    </button>
  </div>
);
export default PlayButton;
