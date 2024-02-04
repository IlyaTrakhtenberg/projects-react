const Canvas = (props) => (
  <canvas
    className="canvas"
    width={props.size}
    height={props.size}
    ref={props.rfr}
    style={{ backgroundColor: props.color }}
  />
);
export default Canvas;
