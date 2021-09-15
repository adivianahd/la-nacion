import Header from "./components/organism/Header";
import Banner from "./components/organism/Banner";
import "./theme/_theme.module.scss";
import Sponsored from "./components/molecules/Sponsored";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Sponsored urlImg="https://cdn.pixabay.com/photo/2015/08/21/10/33/clouds-898712_1280.jpg" />
    </>
  );
}

export default App;
