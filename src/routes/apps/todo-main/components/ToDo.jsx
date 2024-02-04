import mark from "./mark.png";
const ToDo = (props) => {
  const vis = props.doneStatus ? "" : "hidden";
  return (
    <div className="col-12 col-md-8">
      <div className="row">
        <div className="col-1">
          <button
            className="btn btn-outline-light px-1"
            onClick={props.markDone}
          >
            <img src={mark} style={{ height: "1.5rem", visibility: vis }} />
          </button>
        </div>
        <div
          className="col-4 d-flex align-items-center justify-content-center"
          style={{ fontSize: "1.2rem" }}
        >
          {props.name}
        </div>
        <div
          className="col-4 d-flex align-items-center justify-content-center"
          style={{ fontSize: "1.2rem" }}
        >
          {props.date}
        </div>
        <div className="col-3">
          <button
            className="btn btn-outline-light w-100"
            onClick={props.remove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default ToDo;
