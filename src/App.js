import Header from "./components/organism/Header";
import Banner from "./components/organism/Banner";
import "./theme/_theme.module.scss";
import Commercial from "./components/molecules/Commercial";

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
    </>
  );
}

export default App;
