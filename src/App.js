import { LargeLogo } from "./components/atoms/Icons";
import Marquee from "./components/atoms/Marquee";
import "./theme/_theme.module.scss";

function App() {
  return (
    <div>
      <Marquee marquee="$00,00" label="$00,00" separator />
      <LargeLogo />
    </div>
  );
}

export default App;
