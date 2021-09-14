import "./styles.scss";
import Typography from "../../atoms/Typography";
import Marquee from "../../atoms/Marquee";

const CardRegular = ({
  lead,
  colorLead,
  title,
  weightTitle,
  sizeTitle,
  marquee,
  labelMarquee,
  separatorMaquee,
  paragraph,
  cardReverse,
  url,
  alt,
}) => {
  return (
    <div className={cardReverse ? "reverse" : "container"}>
      <img src={url || ""} alt={alt || ""} />
      <div className="container-text">
        <Typography
          color="dark"
          weight={weightTitle || "extraLight"}
          size={sizeTitle || "L"}
          fontFamily="suecasLabMedium"
          lead={lead || ""}
        >
          {title || ""}
        </Typography>
        <Typography
          className="labeled-paragraph"
          weight={"extraLight"}
          color="dark"
          size="LS"
          fontFamily="suecasLabMedium"
          lead={lead || ""}
          colorLead={colorLead || "black"}
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
