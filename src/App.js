import Button from "./components/atoms/Button";
import { LargeLogo, SearchIcon } from "./components/atoms/Icons";
import Typography from "./components/atoms/Typography";
import "./theme/_theme.module.scss";

function App() {
  return (
    <div>
      <Typography
        color={"strongPink"}
        fontFamily={"suecasLabBold"}
        size={"XS"}
      />
      <LargeLogo />
      <Button Icon={SearchIcon} title="Secciones" />
    </div>
  );
}

export default App;
