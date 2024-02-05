export function checkResult(cells) {
  let check = cells.map((cell) => (cell === "X" ? 1 : cell === "O" ? -1 : 0));
  let win = 0;
  check.forEach((val) => (win += val));
  let n = 0;
  check.forEach((val) => val && n++);
  for (let i = 0; i < 9; i++) {
    if (
      !(i % 3) &&
      i < 7 &&
      Math.abs(check[i] + check[i + 1] + check[i + 2]) === 3
    ) {
      return [win ? "X" : "O", i, i + 2];
    }
    if (i < 3 && Math.abs(check[i] + check[i + 3] + check[i + 6]) === 3) {
      return [win ? "X" : "O", i, i + 6];
    }
    if (
      !(i % 2) &&
      i < 3 &&
      Math.abs(check[i] + check[8 - i] + check[4]) === 3
    ) {
      return [win ? "X" : "O", i, 8 - i];
    }
  }
  if (n === 9) return ["Draw", 0, 0];
  return null;
}
export function drawLine(a, canv, p1, p2) {
  canv.beginPath();
  canv.moveTo((a / 3) * (p1 % 3) + a / 6, (a / 3) * Math.floor(p1 / 3) + a / 6);
  canv.lineTo((a / 3) * (p2 % 3) + a / 6, (a / 3) * Math.floor(p2 / 3) + a / 6);
  canv.strokeStyle = "red";
  canv.lineWidth = a / 100;
  canv.stroke();
}
export function reduceColor(state, action) {
  switch (action.value) {
    case "Draw":
      return "rgb(255, 255, 150)";
    case "X":
      return "rgb(255, 200, 160)";
    case "O":
      return "rgb(150, 200, 255)";
    default:
      return "white";
  }
}
