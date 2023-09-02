import React from "react";

function Header(props) {
  return (
    <header>
      <img src={props.logo} alt="Medal badge with a star" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  );
}

export default Header;
