import "./styles.scss";
import Typography from "../../atoms/Typography";
import Marquee from "../../atoms/Marquee";
import ContainerImage from "../../atoms/Picture/ContainerPicture";

const AuthorCard = ({
  lead,
  colorLead,
  weightTitle,
  sizeTitle,
  authorName,
  note,
  urlImg,
  urlNote,
  smallAvatar,
  alt,
}) => {
  return (
    <div className="container">
      <Typography
        color="dark"
        size={sizeTitle || "M"}
        colorLead={colorLead || "strongBlue"}
        fontFamily={
          weightTitle === "bold" ? "suecasLabBold" : "suecasLabMedium"
        }
        lead={lead || ""}
        url={urlNote}
        alt={alt}
      >
        {note || ""}
      </Typography>
      <div className="container-avatar">
        <ContainerImage
          avatar
          src={urlImg}
          alt={authorName}
          className={smallAvatar && "small-avatar"}
        />
        <Marquee sign={"Author"} label={authorName || "full name"} />
      </div>
    </div>
  );
};

export default AuthorCard;
