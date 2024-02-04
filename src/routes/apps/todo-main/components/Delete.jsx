const Delete = (props) => {
  const style = { padding: "6px", margin: "0" };
  return (
    <div className="col-12 col-md-6">
      <div className="row">
        <div className="col-6 text-center">
          <div className="alert alert-light" role="alert" style={style}>
            Are you sure?
          </div>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-light w-100" onClick={props.yes}>
            Yes
          </button>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-light w-100" onClick={props.no}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default Delete;
