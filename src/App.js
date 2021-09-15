import Header from "./components/organism/Header";
import Banner from "./components/organism/Banner";
import "./theme/_theme.module.scss";
import LeftFocal from "./components/templates/LeftFocal";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <LeftFocal />
    </>
  );
}

export default App;
