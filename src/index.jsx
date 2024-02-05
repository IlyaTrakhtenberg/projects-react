import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Calculator from "./routes/apps/calculator/Calculator.jsx";
import RPS from "./routes/apps/rock-paper-scissors/RPS.jsx";
import Stopwatch from "./routes/apps/stopwatch/Stopwatch.jsx";
import TTT from "./routes/apps/tic-tac-toe/TTT.jsx";
import ToDoState from "./routes/apps/todo-main/ToDoState.jsx";
import Converter from "./routes/apps/currency-converter/Converter.jsx";
import reportWebVitals from "./reportWebVitals";
const lists = JSON.parse(localStorage.getItem("lists")) || [];
const toDoRoutes = lists.map((list, ind) => (
  <Route
    exact={true}
    path={"/todo/" + list.name}
    element={<ToDoState list={list} ind={ind} />}
    key={ind}
  />
));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          exact={true}
          path="/"
          element={<Root />}
          errorElement={<ErrorPage />}
        />
        <Route exact={true} path="/calculator" element={<Calculator />} />
        <Route exact={true} path="/converter" element={<Converter />} />
        <Route exact={true} path="/rock-paper-scissors" element={<RPS />} />
        <Route exact={true} path="/stopwatch" element={<Stopwatch />} />
        <Route exact={true} path="/tic-tac-toe" element={<TTT />} />
        <Route exact={true} path="/todo" element={<ToDoState list={null} />} />
        {toDoRoutes}
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
