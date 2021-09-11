const MainWrapper = ({ children }) => {
  return (
    <>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        {children}
      </main>
    </>
  );
};

export default MainWrapper;
