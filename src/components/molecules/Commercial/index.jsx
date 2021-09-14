import "./styles.scss";
import Typography from "../../atoms/Typography";
import Marquee from "../../atoms/Marquee";
import Image from "../../atoms/image";
import Badge from "../../atoms/Badge";

const Commercial = ({
  lead,
  title,
  urlImg,
  alt,
  badge,
  sizeTitle,
  marquee,
  labelMarquee,
}) => {
  return (
    <div className="container">
      <Image src={urlImg} alt={alt || ""} className="image-commercial" />
      <div className="badge-container">
        <Badge title={badge || "holiviris"} />
      </div>
      <div className="typography-content">
        <Typography
          color="white"
          size={sizeTitle || "LS"}
          colorLead={"white"}
          fontFamily="suecasLabMedium"
          lead={lead || ""}
        >
          {title || ""}
        </Typography>
        <Marquee
          color="white"
          marquee={marquee || ""}
          label={labelMarquee || ""}
        />
      </div>
    </div>
  );
};

export default Commercial;
