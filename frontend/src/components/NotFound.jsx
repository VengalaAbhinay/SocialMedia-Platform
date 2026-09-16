import { NavLink } from "react-router";
import { primaryBtn, pageTitleClass, bodyText, pageBackground } from "../styles/common.js";

function NotFound() {
  return (
    <div className={`${pageBackground} flex flex-col items-center justify-center py-32 px-4 text-center gap-6`}>
      <h1 className={pageTitleClass}>404</h1>
      <p className={bodyText}>The page you're looking for doesn't exist or may have been moved.</p>
      <NavLink to="/" className={primaryBtn}>
        Go Home
      </NavLink>
    </div>
  );
}

export default NotFound;
