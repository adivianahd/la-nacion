import "./styles.scss";
import Typography from "../../atoms/Typography";
import Marquee from "../../atoms/Marquee";
import Image from "../../atoms/image";
import Badge from "../../atoms/Badge";

const Commercial = ({
  lead,
  title,
  urlImg,
  urlNote,
  alt,
  badge,
  sizeTitle,
  marquee,
  labelMarquee,
}) => {
  return (
    <div className="container-commercial">
      <Image src={urlImg} alt={alt || ""} className="image-commercial" />
      <div className="badge-commercial">
        <Badge title={badge || ""} />
      </div>
      <div className="typography-commercial">
        <Typography
          color="white"
          size={sizeTitle || "LS"}
          colorLead={"white"}
          fontFamily="suecasLabMedium"
          lead={lead || ""}
          url={urlNote || ""}
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
