import React from "react";
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
        <main>Hello World!</main>
      </m.main>
    </>
  );
};

export default IndexPage;
