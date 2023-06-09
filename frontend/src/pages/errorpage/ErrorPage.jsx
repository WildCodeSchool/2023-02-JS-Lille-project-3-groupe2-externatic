import { useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error_page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && (error.statusText || error.message)}</i>
      </p>
    </div>
  );
}
