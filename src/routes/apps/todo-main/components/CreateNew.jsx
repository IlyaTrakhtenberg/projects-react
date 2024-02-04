const CreateNew = (props) => {
  return (
    <div className="col-12 col-md-6">
      {props.status ? (
        <div className="row">
          <div className="col-8">
            <input
              autoFocus
              className="btn btn-outline-light w-100 h-100"
              onChange={props.onChange}
            />
          </div>
          <div className="col-4">
            <button
              className="btn btn-outline-light w-100 h-100"
              onClick={props.onClick}
            >
              done
            </button>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-outline-light w-100 h-100"
          onClick={props.onClick}
        >
          Create New
        </button>
      )}
    </div>
  );
};
export default CreateNew;
