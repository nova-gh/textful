import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-[700px]">
      <Navbar />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
