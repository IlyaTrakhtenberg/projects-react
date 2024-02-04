const Scoreboard = (props) => (
  <div className="row display-4 justify-content-center border border-white rounded m-0 py-2 w-100">
    <div className="col-2 p-0">{props.time[0]}</div>
    <div className="col-1 p-0">:</div>
    <div className="col-2 p-0">{props.time[1]}</div>
    <div className="col-1 p-0">:</div>
    <div className="col-2 p-0">{props.time[2]}</div>
  </div>
);
export default Scoreboard;
