import GeneralButton from "./components/atoms/Button/GeneralButton";
import { ReactComponent as MenuIcon } from "./components/atoms/Icons/search.svg";
import Typography from "./components/atoms/Typography/Typography";
import "./theme/_theme.module.scss";

function App() {
  return (
    <div>
      <Typography
        color={"strongPink"}
        fontFamily={"suecasLabBold"}
        size={"XXXL"}
      />
      <GeneralButton Icon={MenuIcon} title="Secciones" />
    </div>
  );
}

export default App;
