const Result = (props) => (
  <div className="display-4 text-center">
    {props.result[0] || props.result[1] + " wins"}
  </div>
);
export default Result;
