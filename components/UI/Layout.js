import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-h-screen">
      <Navbar />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
