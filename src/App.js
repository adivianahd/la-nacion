import Header from "./components/organism/Header";
import Banner from "./components/organism/Banner";
import "./theme/_theme.module.scss";
import Commercial from "./components/molecules/Commercial";
import RecommendedNote from "./components/molecules/RecommendedNote";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Commercial
        badge="ESPACIO PATROCINADO"
        lead="Volanta"
        title="Esto es un titulo de la novedad con unas cuantas lineas que ocupar"
        marquee="Marquesina"
        labelMarquee="1"
      />
      <RecommendedNote urlImg="https://cdn.pixabay.com/photo/2015/08/21/10/33/clouds-898712_1280.jpg" />
    </>
  );
}

export default App;
