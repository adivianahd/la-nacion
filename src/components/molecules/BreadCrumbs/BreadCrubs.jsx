import "./styles.scss";
import Typography from "../../atoms/Typography";
import Marquee from "../../atoms/Marquee";
import { WeatherIcon, ClubIcon } from "../../atoms/Icons";

const BreadCrumbs = () => {
  return (
    <div className="breadCrumbs-background">
      <div className="breadCrumbs-container">
        <div className="dolar-breadcrumb">
          <Typography
            className="dolar-breadcrum-hide-mobile"
            color="strongBlue"
            size="XS"
          >
            Dólar:
          </Typography>
          <Typography>BNA:</Typography>
          <Marquee separator label="$00.00" marquee="$00.00" />
          <Typography>Blue:</Typography>
          <Marquee separator label="$00.00" marquee="$00.00" />
        </div>
        <div className="hiden-breadcrum-in-mobile">
          <WeatherIcon />
          <Marquee marquee="00.0°" />
          <Typography>Capital Federal</Typography>
        </div>
        <div className="hiden-breadcrum-in-mobile">
          <button className="button-newsletters">Recibí Newsletters</button>
        </div>
        <div className="club-nation-breadcrumb">
          <ClubIcon />
          <Typography color="strongBlue" size="XS">
            Descubrí tus beneficios
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
