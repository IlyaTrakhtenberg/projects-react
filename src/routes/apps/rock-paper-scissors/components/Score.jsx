const Score = (props) => (
  <div className="row my-3">
    <div className="col text-center" style={props.style}>
      {"Wins: " +
        props.score.wins +
        ", Losses: " +
        props.score.losses +
        ", Draws: " +
        props.score.draws}
    </div>
  </div>
);
export default Score;
