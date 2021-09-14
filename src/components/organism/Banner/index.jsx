import Typography from "../../atoms/Typography";
import Badge from "../../atoms/Badge";
import Marquee from "../../atoms/Marquee";
import "./styles.scss";

const Banner = ({ title, badge, marquee, labelMarquee, lead }) => {
  return (
    <div className="banner">
      <div className="gradient-container">
        <div>
          <div className="label-banner">
            <Badge title={badge || "INFOGRAFÍA"} />
            <Typography
              className="labeled-paragraph"
              color="white"
              size="XXXL"
              fontFamily="suecasLabBold"
              lead={lead || "lead"}
              colorLead="white"
            >
              {title ||
                "Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"}
            </Typography>
            <Marquee
              marquee={marquee || "marquee"}
              label={labelMarquee || "author"}
              separator
              color={"white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
