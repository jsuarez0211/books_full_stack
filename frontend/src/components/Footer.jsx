import React from "react";

const Footer = ({ error }) => {
  return (
    <footer>
      <h1>{error.message}</h1>
    </footer>
  );
};

export default Footer;
