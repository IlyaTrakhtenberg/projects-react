export function rps() {
  const random = Math.random();
  if (random < 1 / 3) return "✊";
  else if (random < 2 / 3) return "✋";
  else return "✌️";
}
export function newResult(myMove, compMove) {
  if (compMove === myMove) return "Draw";
  else if (
    (compMove === "✋" && myMove === "✊") ||
    (compMove === "✌️" && myMove === "✋") ||
    (compMove === "✊" && myMove === "✌️")
  )
    return "You lose";
  else return "You win";
}
export function newScore(score, result) {
  const scoreCopy = Object.assign({}, score);
  result === "Draw"
    ? scoreCopy.draws++
    : result === "You lose"
    ? scoreCopy.losses++
    : scoreCopy.wins++;
  return scoreCopy;
}
