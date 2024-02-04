import "./RPS.css";
import { useState, useEffect } from "react";
import Title from "./components/Title.jsx";
import PlayButton from "./components/PlayButton.jsx";
import Comment from "./components/Comment.jsx";
import Result from "./components/Result.jsx";
import Score from "./components/Score.jsx";
import OptionsButton from "./components/OptionButton.jsx";
import { rps, newResult, newScore } from "./functions.js";
const RPS = () => {
  const [round, updRound] = useState(0);
  const [moves, updMoves] = useState({ my: "", comp: "" });
  const [result, updResult] = useState("Make Your Move");
  const [score, updScore] = useState({ wins: 0, losses: 0, draws: 0 });
  const play = (myMove) => {
    updMoves({ my: myMove, comp: rps() });
    updRound((round) => round + 1);
  };
  useEffect(() => {
    round && updResult(newResult(moves.my, moves.comp));
    round && updScore(newScore(score, newResult(moves.my, moves.comp)));
  }, [round]);
  const [id, setId] = useState(null);
  const [autoStatus, setAutoStatus] = useState(false);
  const autoPlay = () => {
    if (autoStatus) {
      clearInterval(id);
      setId(null);
      setAutoStatus(false);
    } else {
      setId(setInterval(() => play(rps()), 1000));
      setAutoStatus(true);
    }
  };
  return (
    <>
      <Title />
      <div className="container">
        <div className="row gy-3">
          <div className="col-12 col-md-6 cont-col">
            <div className="row my-3">
              {["✊", "✋", "✌️"].map((move) => (
                <PlayButton icon={move} key={move} onClick={() => play(move)} />
              ))}
            </div>
            <Result result={result} />
            <Comment
              myMove={moves.my}
              compMove={moves.comp}
              style={{ fontSize: "1.8rem" }}
            />
          </div>
          <div className="col">
            <Score score={score} style={{ fontSize: "1.5rem" }} />
            <div className="row my-3">
              <OptionsButton
                text="Reset Score"
                onClick={() => {
                  autoStatus && autoPlay();
                  updRound(0);
                  updMoves({ my: "", comp: "" });
                  updResult("Make Your Move");
                  updScore({ wins: 0, losses: 0, draws: 0 });
                }}
              />
              <OptionsButton
                text={autoStatus ? "Stop" : "Auto Play"}
                onClick={autoPlay}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RPS;
