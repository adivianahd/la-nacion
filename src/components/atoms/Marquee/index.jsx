import Typography from "../Typography";
import "./styles.scss";

const Marquee = ({ marquee, label, sign, separator, color }) => {
  const withSeparator = separator ? " /" : "";

  return (
    <div>
      {marquee && (
        <div className="marquee-styles">
          <Typography size="XS" weight="bold" color={color}>{`${
            marquee || ""
          }${withSeparator}`}</Typography>
          <Typography size="XS" weight="bold" color={color}>
            {label || ""}
          </Typography>
        </div>
      )}
      {sign && (
        <div className="marquee-styles">
          <Typography weight="bold" size="M" color={color}>
            {sign || ""}
          </Typography>
          <Typography weight="bold" size="M" color={color}>
            {label || ""}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Marquee;
