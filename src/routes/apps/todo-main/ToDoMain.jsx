import { useState } from "react";
import ToDoLink from "./components/ToDoLink.jsx";
import CreateNew from "./components/CreateNew.jsx";
const ToDoMain = (props) => {
  const [input, setInput] = useState({ status: false, value: "" });
  const done = (name) => {
    if (name) {
      props.addList(name);
      setInput({ status: false, value: "" });
    }
  };
  const checkDone = (list) => {
    let done = 0;
    list.forEach((todo) => {
      todo.done && done++;
    });
    return list.length ? done + "/" + list.length : "empty";
  };
  return (
    <>
      <div className="display-3 text-center my-3">ToDo Manager</div>
      <div className="container">
        <div className="row justify-content-center g-3">
          {props.lists.map((list, ind) => (
            <ToDoLink
              key={ind}
              name={list.name}
              href={"/todo/" + list.name}
              done={checkDone(list.list)}
            />
          ))}
          <CreateNew
            status={input.status}
            onChange={(event) =>
              setInput({ status: input.status, value: event.target.value })
            }
            onClick={() => {
              input.status
                ? done(input.value)
                : setInput({ status: true, value: "" });
            }}
          />
        </div>
      </div>
    </>
  );
};
export default ToDoMain;
