const CurrencyLine = (props) => {
  return (
    <div className="row g-3 mb-2">
      <div className="col-2">
        <div className="text-center" style={{ fontSize: "1.5rem" }}>
          {props.currency}
        </div>
      </div>
      <div className="col-6">
        <input
          className="btn btn-outline-light w-100 h-100"
          value={props.value}
          onChange={props.onChange}
          onClick={(event) => {
            event.target.value = "";
          }}
          onBlur={(event) => {
            event.target.value = props.value;
          }}
        />
      </div>
      <div className="col-4">
        {props.currency !== "USD" ? (
          <button
            className="btn btn-outline-light w-100 h-100"
            onClick={props.onClick}
          >
            Remove
          </button>
        ) : (
          <div
            className="text-center border rounded"
            style={{ padding: "6px" }}
          >
            Base
          </div>
        )}
      </div>
    </div>
  );
};
export default CurrencyLine;
