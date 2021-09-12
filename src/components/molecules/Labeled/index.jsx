import Typography from "../../atoms/Typography";
import "./styles.scss";

const Labeled = ({ lead, paraghaph, size, fontFamily, color }) => {
  return (
    <div className="labeled-style">
      <Typography
        className="lead"
        color={color || "dark"}
        size={size || "M"}
        fontFamily={fontFamily || "suecasLabMedium"}
      >
        {lead}
      </Typography>
      <Typography
        color={color || "dark"}
        size={size || "M"}
        fontFamily={fontFamily || "suecasLabMedium"}
      >
        {paraghaph}
      </Typography>
    </div>
  );
};

export default Labeled;
