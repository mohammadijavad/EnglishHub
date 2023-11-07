import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Landing({children}:{children:React.ReactNode}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Landing;
