const Root = () => (
  <>
    <div className="container-fluid text-center border-bottom border-light border-2 display-6 p-2">
      Ilya Trakhtenberg projects
    </div>
    <div className="container-md text-center mt-3">
      <div className="row gy-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <a
            className="btn btn-outline-light w-100"
            href="/projects-react/calculator"
          >
            Calculator
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <a
            className="btn btn-outline-light w-100"
            href="/projects-react/converter"
          >
            Currency Converter
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <a
            className="btn btn-outline-light w-100"
            href="/projects-react/rock-paper-scissors"
          >
            Rock-Paper-Scissors
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <a
            className="btn btn-outline-light w-100"
            href="/projects-react/stopwatch"
          >
            Stopwatch
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <a
            className="btn btn-outline-light w-100"
            href="/projects-react/todo"
          >
            ToDo Manager
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <a
            className="btn btn-outline-light w-100"
            href="/projects-react/tic-tac-toe"
          >
            Tic-Tac-Toe
          </a>
        </div>
      </div>
    </div>
  </>
);
export default Root;
