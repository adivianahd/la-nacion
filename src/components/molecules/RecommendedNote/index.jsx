import "./styles.scss";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/image";
import Badge from "../../atoms/Badge";

const RecommendedNote = ({
  lead,
  title,
  urlImg,
  alt,
  badge,
  sizeTitle,
  urlNote,
}) => {
  return (
    <div className="container-recomemended-note">
      <div className="container-badge-image">
        <Image src={urlImg} alt={alt || ""} className="image-note" />
        <Badge className="badge" number title={badge || "1"} />
      </div>
      <div className="typography">
        <Typography
          color="dark"
          size={sizeTitle || "L"}
          fontFamily="suecasLabMedium"
          lead={lead || "hola"}
          urlNote={urlNote}
        >
          {title || "soy un texto aqui para rellenar"}
        </Typography>
      </div>
    </div>
  );
};

export default RecommendedNote;
