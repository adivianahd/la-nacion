import "./styles.scss";
import Typography from "../../atoms/Typography";
import Marquee from "../../atoms/Marquee";

const CardRegular = ({
  leadTitle,
  leadParagraph,
  colorLead,
  title,
  weightTitle,
  sizeTitle,
  marquee,
  labelMarquee,
  separatorMaquee,
  paragraph,
  cardReverse,
  urlImg,
  urlNote,
  alt,
}) => {
  return (
    <div className={cardReverse ? "reverse" : "container"}>
      <img src={urlImg} alt={alt || ""} />
      <div className="container-text">
        <Typography
          color="dark"
          size={sizeTitle || "L"}
          colorLead={colorLead}
          fontFamily={
            weightTitle === "bold" ? "suecasLabBold" : "suecasLabMedium"
          }
          lead={leadTitle || ""}
          url={urlNote}
        >
          {title || ""}
        </Typography>
        <Typography
          className="labeled-paragraph"
          weight={"extraLight"}
          color="dark"
          size="LS"
          fontFamily="suecasLabMedium"
          lead={leadParagraph || ""}
          colorLead={"black"}
        >
          {paragraph || ""}
        </Typography>
        <Marquee
          marquee={marquee || ""}
          label={labelMarquee || ""}
          separator={separatorMaquee || true}
        />
      </div>
    </div>
  );
};

export default CardRegular;
