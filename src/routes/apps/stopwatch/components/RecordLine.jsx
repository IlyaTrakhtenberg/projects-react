import Button from "./Button.jsx";
const RecordLine = (props) => {
  const padding = { padding: "6px" };
  return (
    <>
      <div className="col-6">
        <div
          className=" px-1 d-flex align-items-center justify-content-center border border-white rounded"
          style={padding}
        >
          {props.result}
        </div>
      </div>
      <div className="col-6">
        <Button onClick={props.delete} text="Delete" />
      </div>
      {props.doneStatus ? (
        <div className="col-12">
          <div
            className="px-1 d-flex align-items-center justify-content-center border border-white rounded"
            style={padding}
          >
            {props.comment}
          </div>
        </div>
      ) : (
        <>
          <div className="col-6">
            <input
              className="btn btn-outline-light w-100"
              placeholder="Add a comment"
              onChange={props.onChange}
            />
          </div>
          <div className="col-6">
            <Button onClick={props.done} text="Done" />
          </div>
        </>
      )}
    </>
  );
};
export default RecordLine;
