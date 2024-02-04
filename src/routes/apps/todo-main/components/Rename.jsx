const Rename = (props) => {
  return (
    <div className="col-12 col-md-6">
      <div className="row">
        <div className="col-8">
          <input
            autoFocus
            className="btn btn-outline-light w-100 h-100"
            onChange={props.nameInput}
          />
        </div>
        <div className="col-4">
          <button
            className="btn btn-outline-light w-100 h-100"
            onClick={props.onClick}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
export default Rename;
