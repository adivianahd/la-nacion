import { LargeLogo } from "./components/atoms/Icons";
import Marquee from "./components/atoms/Marquee";
import Paragraph from "./components/molecules/Paragraph";
import "./theme/_theme.module.scss";

function App() {
  return (
    <div>
      <LargeLogo />
      <Paragraph
        lead="Subhead"
        paraghaph="Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial."
      />
    </div>
  );
}

export default App;
