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
        <Badge className="badge-note" number title={badge || ""} />
      </div>
      <div className="typography-note">
        <Typography
          color="dark"
          size={sizeTitle || "L"}
          fontFamily="suecasLabMedium"
          lead={lead || ""}
          urlNote={urlNote}
        >
          {title || ""}
        </Typography>
      </div>
    </div>
  );
};

export default RecommendedNote;
