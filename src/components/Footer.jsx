import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Jaxon Grosam Coding 2023</p>
    </footer>
  );
};

const footerStyle = {
  position: "fixed",
  bottom: "0",
  width: "100%",
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px 0",
};

export default Footer;
