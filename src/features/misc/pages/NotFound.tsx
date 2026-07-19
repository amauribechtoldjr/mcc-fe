import { Link } from "@tanstack/react-router";

export const NotFound = () => {
  return (
    <div>
      <h1 className="font-bold">404 — Page not found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
};
