import { useState } from "react";
const ToDoLink = (props) => {
  const [color, setColor] = useState("white");
  return (
    <div className="col-12 col-md-6">
      <a
        className="btn btn-outline-light w-100 h-100"
        href={props.href}
        role="button"
        onMouseOver={() => setColor("black")}
        onMouseOut={() => setColor("white")}
      >
        <div className="container-fluid">
          <div className="row">
            <div className={"col-8 border-end border-" + color}>
              {props.name}
            </div>
            <div className="col-4">{props.done}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default ToDoLink;
