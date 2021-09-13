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
            {badge && <Badge title={badge} />}
            <Typography
              className="labeled-paragraph"
              color="white"
              size="XXXL"
              fontFamily="suecasLabBold"
              lead={lead || ""}
              isLeadWhite
            >
              {title}
            </Typography>
            <Marquee
              marquee={marquee || ""}
              label={labelMarquee || ""}
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
