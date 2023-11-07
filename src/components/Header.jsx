import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0 }}>Jaxon Grosam's Portfolio</h1>
    </header>
  );
};

const headerStyle = {
  background: "#ccc",
  color: "#333",
  textAlign: "center",
  padding: "0px",
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  width: "30%",
};

export default Header;
