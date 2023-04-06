import Header from "../header";
import Footer from "../footer";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
