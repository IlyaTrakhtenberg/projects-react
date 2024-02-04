const AddNew = (props) => {
  return (
    <div className="col-12 col-md-8">
      <div className="row">
        <div className="col-4">
          <input
            autoFocus
            value={props.value}
            className="btn btn-outline-light w-100 h-100"
            onChange={props.nameInput}
          />
        </div>
        <div className="col-4">
          <input
            className="btn btn-outline-light w-100 h-100"
            type="date"
            onChange={props.dateInput}
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
export default AddNew;
