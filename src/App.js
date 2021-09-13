import { LargeLogo } from "./components/atoms/Icons";
import Paragraph from "./components/molecules/Paragraph";
import Banner from "./components/organism/Banner";
import "./theme/_theme.module.scss";

function App() {
  return (
    <div>
      <LargeLogo />
      <Banner
        title="Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"
        lead="lead"
        marquee="marquee"
        labelMarquee="author"
        badge="INFOGRAFÍA"
      />
      <Paragraph
        lead="Subhead"
        paraghaph="Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."
      />
    </div>
  );
}

export default App;
