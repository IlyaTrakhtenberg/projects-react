import { useState } from "react";
import Title from "./components/Title.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import Button from "./components/Button.jsx";
import RecordLine from "./components/RecordLine.jsx";
const Stopwatch = () => {
  const [recs, updRecs] = useState([]);
  const [time, setTime] = useState(0);
  const [id, setId] = useState(null);
  const [timerStatus, setTimerStatus] = useState(false);
  const [startStop, setStartStop] = useState("Start");
  const timeFormat = (t) => [
    ord(Math.floor(t / 6000)),
    ord(Math.floor(t / 100) % 60),
    ord(t % 100),
  ];
  const ord = (n) => (n < 10 ? `0${n}` : `${n}`);
  const timer = () => {
    if (timerStatus) {
      clearInterval(id);
      setId(null);
      setTimerStatus(false);
      setStartStop("Start");
      updRecs((recs) => [
        ...recs,
        {
          result:
            timeFormat(time)[0] +
            ":" +
            timeFormat(time)[1] +
            ":" +
            timeFormat(time)[2],
          comment: { comment: "", done: false },
        },
      ]);
    } else {
      setId(
        setInterval(() => {
          setTime((time) => time + 1);
          setStartStop("Stop");
        }, 10)
      );
      setTimerStatus(true);
    }
  };
  return (
    <div className="container text-center">
      <div className="row gap-3 m-3">
        <div className="col-12 col-md-6">
          <Title />
          <Scoreboard time={timeFormat(time)} />
          <div className="row mt-1 g-2">
            <div className="col-6">
              <Button text={startStop} onClick={timer} />
            </div>
            <div className="col-6">
              <Button
                text="Reset"
                onClick={() => {
                  clearInterval(id);
                  setId(null);
                  setTimerStatus(false);
                  setStartStop("Start");
                  setTime(0);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row g-2">
            {recs.map((rec, ind) => (
              <RecordLine
                key={ind}
                result={rec.result}
                comment={rec.comment.comment}
                doneStatus={rec.comment.done}
                delete={() => {
                  updRecs(recs.filter((rec, delInd) => ind !== delInd));
                }}
                done={() => {
                  const newRecs = [...recs];
                  newRecs[ind].comment.comment &&
                    (newRecs[ind].comment.done = true);
                  updRecs(newRecs);
                }}
                onChange={(event) => {
                  const newRecs = [...recs];
                  newRecs[ind].comment.comment = event.target.value;
                  updRecs(newRecs);
                }}
              />
            ))}
          </div>
          <div className="row g-2 mt-1">
            {recs.length > 0 && (
              <div className="col-12">
                <Button
                  text="Clear"
                  onClick={() => {
                    clearInterval(id);
                    setId(null);
                    setTimerStatus(false);
                    setStartStop("Start");
                    updRecs([]);
                    setTime(0);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stopwatch;
