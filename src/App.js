import GeneralButton from "./components/atoms/Button/GeneralButton";
import "./theme/theme.scss";
import { ReactComponent as MenuIcon } from "./components/atoms/Icons/menu.svg";

function App() {
  return (
    <div>
      <GeneralButton Icon={MenuIcon} title="Secciones" />
    </div>
  );
}

export default App;
