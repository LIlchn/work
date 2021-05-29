import React from "react";

import Header from "modules/Header";

import * as ScLayout from "./styled";
import Footer from "components/Footer";

const Layout = ({ fitContent = true, children }) => {
  return (
    <ScLayout.ScLayout>
      <Header />

      <ScLayout.Content fitContent={fitContent}>{children}</ScLayout.Content>
      <Footer />
    </ScLayout.ScLayout>
  );
};

export default Layout;
