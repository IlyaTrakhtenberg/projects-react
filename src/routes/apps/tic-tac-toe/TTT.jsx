import "./TTT.css";
import { useState, useEffect, useRef } from "react";
import { checkResult, drawLine, canvColor } from "./functions.js";
import Cell from "./components/Cell.jsx";
import Result from "./components/Result.jsx";
import NewGame from "./components/NewGame.jsx";
import Canvas from "./components/Canvas.jsx";
const TTT = () => {
  const canvRef = useRef(null);
  const [canvSize, setCanvSize] = useState(0);
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [result, setResult] = useState([]);
  const [color, setColor] = useState("");
  const newTurn = () => setTurn((turn) => (turn === "X" ? "O" : "X"));
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);
  useEffect(() => {
    setResult(checkResult(cells));
  }, [cells]);
  useEffect(() => {
    result && newTurn();
    result &&
      drawLine(
        canvSize,
        canvRef.current.getContext("2d"),
        result[1],
        result[2]
      );
    setColor(canvColor(result ? result[0] || turn : ""));
  }, [result]);
  useEffect(() => {
    setCanvSize(canvRef.current.parentElement.clientHeight);
  }, [canvSize]);
  return (
    <>
      <div className="container p-0 mt-4">
        <div className="row g-0">
          <div className="col-12 col-md-8 p-0 d-flex justify-content-center">
            <div className="row g-0 field">
              {cells.map((cell, ind) => (
                <Cell
                  cell={cell}
                  key={ind}
                  status={!result}
                  onClick={() => {
                    const cellsCopy = [...cells];
                    cellsCopy[ind] = turn;
                    setCells(cellsCopy);
                    newTurn();
                  }}
                />
              ))}
            </div>
            <Canvas color={color} size={canvSize} rfr={canvRef} />
          </div>
          <div className="col-12 col-md-4">
            {result && (
              <>
                <Result result={[result[0], turn]} />
                <NewGame
                  onClick={() => {
                    setCells(Array(9).fill(""));
                    setTurn("X");
                    canvRef.current
                      .getContext("2d")
                      .clearRect(0, 0, canvSize, canvSize);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TTT;
