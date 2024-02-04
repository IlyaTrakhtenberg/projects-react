const Options = (props) => {
  return (
    <div className="col-8 col-md-4 justify-content-center">
      <div className="dropdown">
        <button
          className="btn btn-outline-light dropdown-toggle w-100 h-100"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Options
        </button>
        <ul className="dropdown-menu w-100">
          <li>
            <button className="dropdown-item" onClick={props.add}>
              Add ToDo
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={props.rename}>
              Change List Name
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={props.delete}>
              Delete List
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Options;
