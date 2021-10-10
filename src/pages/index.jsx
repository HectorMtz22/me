import React from "react";
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { motion as m } from "framer-motion";

import "../theme/global.css";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const IndexPage = () => {
  return (
    <>
      <m.main {...variants}>
        <Header />
        <Profile />
      </m.main>
    </>
  );
};

export default IndexPage;
