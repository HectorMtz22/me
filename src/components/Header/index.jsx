import React from "react";
import { Helmet } from "react-helmet";
// import { MdHome as IconHome } from "react-icons/md";
import { flex } from "./styles";

export const Header = ({ message = "Home" }) => {
  return (
    <>
      <Helmet>
        <title>HectorMtz22 - {message}</title>
      </Helmet>
      <header>
        <main style={flex}>
          {/* <IconHome size="32" /> */}
          <h1>About Me</h1>
        </main>
      </header>
    </>
  );
};
