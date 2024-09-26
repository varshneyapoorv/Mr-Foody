import Header from "./components/Header";
import Body from "./components/Body";


// Main App Layout component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

export default AppLayout;