import Input from "./Input.jsx";
import Button from "./Button.jsx";
import "./calculator.css";
import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
const Calculator = () => {
  const set = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "(",
    "0",
    ")",
    "/",
    ".",
    "C",
    "Clear",
    "=",
  ];
  const [input, inpUpd] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);
  const error = () => {
    setColor("rgb(220,53,69)");
    setTimeout(() => {
      setColor("");
    }, 250);
  };
  return (
    <div className="container p-3">
      <div className="row">
        <Input value={input} />
        <div className="col pad-container">
          <div className="row">
            {set.map((symb, ind) => (
              <Button
                color={color}
                symbol={symb}
                onClick={() => {
                  if (ind < 17) {
                    inpUpd(input + symb);
                    setColor("");
                  }
                  if (ind === 17) {
                    inpUpd(input.slice(0, -1));
                    setColor("");
                  }
                  if (ind === 18) {
                    inpUpd("");
                    setColor("");
                  }
                  if (ind === 19) {
                    calc(input) ? inpUpd(calc(input)) : error();
                  }
                }}
                key={symb}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const calc = (exp) => {
  try {
    return evaluate(exp);
  } catch (error) {
    return null;
  }
};
export default Calculator;
