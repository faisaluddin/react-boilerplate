import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.mainContent}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
