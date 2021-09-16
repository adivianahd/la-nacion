import Header from "./components/organism/Header";
import Banner from "./components/organism/Banner";
import "./theme/_theme.module.scss";
import LeftFocal from "./components/templates/GridTemplate";
import { Footer } from "./components/molecules";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <LeftFocal />
      <Footer />
    </>
  );
}

export default App;
