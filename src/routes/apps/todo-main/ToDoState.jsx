import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ToDoList from "./ToDoList.jsx";
import ToDoMain from "./ToDoMain.jsx";
const ToDoState = (props) => {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);
  const unique = (name) => {
    let uniqName = name;
    lists.forEach((list) => {
      list.name === name && (uniqName = unique(name + "!"));
    });
    return uniqName;
  };
  const addList = (name) => {
    setLists((lists) => [...lists, { name: unique(name), list: [] }]);
  };
  const updList = (ind, list) => {
    const copy = [...lists];
    copy[ind] = list;
    setLists(copy);
  };
  const deleteList = (ind) => {
    const copy = [...lists];
    copy.splice(ind, 1);
    setLists(copy);
  };
  return (
    <>
      {props.list ? (
        <ToDoList
          updList={updList}
          deleteList={deleteList}
          list={props.list}
          ind={props.ind}
          nav={() => navigate("/projects-react/todo", { replace: true })}
        />
      ) : (
        <ToDoMain addList={addList} lists={lists} />
      )}
    </>
  );
};
export default ToDoState;
