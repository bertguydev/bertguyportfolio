import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src="images/bc-logo-fff.png" alt="Bolby" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img src="images/bc-logo-fff.png" alt="Bolby" />
      </Link>
    </div>
  );
}

export default Logo;
