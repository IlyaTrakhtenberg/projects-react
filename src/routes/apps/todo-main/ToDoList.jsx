import Options from "./components/Options";
import ToDo from "./components/ToDo";
import AddNew from "./components/AddNew";
import Rename from "./components/Rename";
import Delete from "./components/Delete";
import { useState, useEffect, useReducer } from "react";
const ToDoList = (props) => {
  const reduce = (state, action) => {
    if (action.type === "save") props.saveList(props.ind, action.value);
    return action.value;
  };
  const [active, setActive] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [alert, setAlert] = useState(false);
  const [list, dispatch] = useReducer(reduce, props.list);
  const done = (props) => {
    if (props.every((value) => value)) {
      const newList =
        props.length === 2
          ? {
              name: list.name,
              list: [...list.list, { name: name, date: date, done: false }],
            }
          : { name: name, list: list.list };
      dispatch({ value: newList });
      setActive("");
      setName("");
      setDate("");
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 600);
    }
  };
  const markDone = (ind) => {
    const copy = [...list.list];
    copy[ind].done = !copy[ind].done;
    dispatch({ value: { name: list.name, list: copy } });
  };
  const remove = (ind) => {
    const copy = [...list.list];
    copy.splice(ind, 1);
    dispatch({ value: { name: list.name, list: copy } });
  };
  useEffect(() => {
    dispatch({ type: "save", value: list });
  }, [list]);
  return (
    <>
      <div className="container">
        <div className=" row display-3 justify-content-center my-3">
          {list.name}
        </div>
        <div className="row justify-content-center mb-3">
          {active === "add" && (
            <AddNew
              value={name}
              nameInput={(event) => setName(event.target.value)}
              dateInput={(event) => setDate(event.target.value)}
              onClick={() => done([name, date])}
            />
          )}
          {active === "rename" && (
            <Rename
              onClick={() => done([name])}
              nameInput={(event) => setName(event.target.value)}
            />
          )}
          {active === "delete" && (
            <Delete
              yes={() => {
                props.deleteList(props.ind);
                props.nav();
              }}
              no={() => setActive("")}
            />
          )}
          {!active && (
            <Options
              add={() => {
                setActive("add");
              }}
              rename={() => {
                setActive("rename");
              }}
              delete={() => {
                setActive("delete");
              }}
            />
          )}
        </div>
        {alert && (
          <div className="row justify-content-center">
            <div className="col-8 col-sm-6 col-md-4 text-center">
              <div className="alert alert-warning p-2" role="alert">
                fill the inputs
              </div>
            </div>
          </div>
        )}
        <div className="row justify-content-center g-3">
          {list.list.map((todo, ind) => (
            <ToDo
              name={todo.name}
              date={todo.date}
              key={ind}
              markDone={() => markDone(ind)}
              remove={() => remove(ind)}
              doneStatus={todo.done}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ToDoList;
