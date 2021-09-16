import "./styles.scss";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/image";
import Badge from "../../atoms/Badge";

const Sponsored = ({ lead, title, urlImg, alt, badge, sizeTitle, urlNote }) => {
  return (
    <div className="container-sponsored">
      <Image src={urlImg} alt={alt || ""} className="image-sponsored" />
      <div className="container-badge-sponsored">
        <Badge className="badge" title={badge || "ESPACIO PATROCINADO"} />
        <div className="typography-sponsored">
          <Typography
            color="dark"
            colorLead="strongBlue"
            size={sizeTitle || "XL"}
            fontFamily="suecasLabBold"
            lead={lead || "Lead"}
            urlNote={urlNote}
          >
            {title ||
              "Title esto es un titulo de la novedad con unas cuantas lineas que ocupar"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
