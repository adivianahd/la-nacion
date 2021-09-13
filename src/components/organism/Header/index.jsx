import Typography from "../../atoms/Typography";
import Badge from "../../atoms/Badge";
import "./styles.scss";
import Button from "../../atoms/Button";
import { SearchIconBig } from "../../atoms/Icons/index";

const Header = () => {
  return (
    <div className="header-container">
      <Button className="button-suscribe">SUSCRIBITE</Button>
      <SearchIconBig />
    </div>
  );
};

export default Header;
