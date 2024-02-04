const Cell = (props) => (
  <div className="col-4 cell d-flex justify-content-center align-items-center">
    {props.cell ||
      (props.status && (
        <button className="empty" onClick={props.onClick}></button>
      ))}
  </div>
);
export default Cell;
