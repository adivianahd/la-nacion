import GeneralButton from "./components/atoms/Button/GeneralButton";
import { ReactComponent as MenuIcon } from "./components/atoms/Icons/search.svg";
import "./theme/theme.scss";

function App() {
  return (
    <div>
      <GeneralButton Icon={MenuIcon} title="Secciones" />
    </div>
  );
}

export default App;
