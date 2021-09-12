import Typography from "../../atoms/Typography";
import "./styles.scss";

const Paragraph = ({ lead, paraghaph }) => {
  return (
    <div className="paragrahp-style">
      <Typography className="lead" color="dark" weight="light" size="M">
        {lead}
      </Typography>
      <Typography color="dark" size="M" weight="light">
        {paraghaph}
      </Typography>
    </div>
  );
};

export default Paragraph;
