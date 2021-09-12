import GeneralButton from "./components/atoms/Button/GeneralButton";
import { ReactComponent as MenuIcon } from "./components/atoms/Icons/search.svg";
import Typography from "./components/atoms/Typography/Typography";
import "./theme/theme.scss";

function App() {
  return (
    <div>
      <Typography />
      <GeneralButton Icon={MenuIcon} title="Secciones" />
    </div>
  );
}

export default App;
