const Comment = (props) => (
  <div className="row my-3 text-center" style={props.style}>
    <div className="col-4 align-self-center text-end">You</div>
    <div className="col-2 text-start display-6">{props.myMove}</div>
    <div className="col-2 text-end display-6">{props.compMove}</div>
    <div className="col-4 align-self-center text-start" style={props.style}>
      Bot
    </div>
  </div>
);
export default Comment;
