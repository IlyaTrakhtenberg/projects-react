const NewGame = (props) => (
  <div className="d-flex justify-content-center">
    <button className="btn btn-dark btn-lg" onClick={props.onClick}>
      New game
    </button>
  </div>
);
export default NewGame;
