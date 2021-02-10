import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

const PrimaryTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { PrimaryTemplate };
