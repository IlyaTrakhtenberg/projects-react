import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="text-center">
      <div className="display-1">Oops!</div>
      <div className="display-6">{error.statusText || error.message}</div>
    </div>
  );
};
export default ErrorPage;
