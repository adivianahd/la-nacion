import "./styles.scss";
import Button from "../../atoms/Button";
import { SearchIconBig, SearchIcon, MenuIcon } from "../../atoms/Icons/index";
import BreadCrumbs from "../../molecules/BreadCrumbs/BreadCrubs";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
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
      <BreadCrumbs />
    </div>
  );
};

export default Header;
