import "./styles.scss";
import Button from "../../atoms/Button";
import { SearchIconBig, SearchIcon, MenuIcon } from "../../atoms/Icons/index";

const Header = () => {
  return (
    <div className="header-container">
      <div className="container-buttons">
        <div className="buttons-hide">
          <Button Icon={MenuIcon}>Secciones</Button>
          <Button Icon={SearchIcon}>buscar</Button>
        </div>
        <div className="buttons-hide">
          <Button className="suscribe-button">SUSCRIrBITE</Button>
          <Button className="login-button">ingresar</Button>
        </div>
      </div>
      <Button className="button-suscribe">SUSCRIBITE</Button>
      <SearchIconBig className="search-icon-mobile" />
    </div>
  );
};

export default Header;
