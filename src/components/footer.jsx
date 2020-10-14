import React from "react";

const Footer = () => {
  return (
    <p className="border-top pt-3 text-center">
      &copy; {new Date().getFullYear()}
    </p>
  );
};

export default Footer;
