import "./styles.scss";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/image";
import Badge from "../../atoms/Badge";

const Sponsored = ({ lead, title, urlImg, alt, badge, sizeTitle, urlNote }) => {
  return (
    <div className="container-sponsored">
      <Image
        src={
          urlImg ||
          "https://cdn.pixabay.com/photo/2015/08/21/10/33/clouds-898712_1280.jpg"
        }
        alt={alt || ""}
        className="image-note"
      />
      <div className="container-badge">
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
