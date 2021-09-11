const Layout = ({ children }) => {
  return (
    <div className="mt-5 lg:mt-10 text-primeLight font-poppins">
      <Navbar />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
