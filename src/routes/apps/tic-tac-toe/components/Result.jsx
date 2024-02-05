const Result = (props) => (
  <div className="display-4 text-center">
    {props.result === "Draw" ? props.result : props.result + " wins"}
  </div>
);
export default Result;
