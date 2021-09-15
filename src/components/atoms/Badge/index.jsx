import "./styles.scss";

const Badge = ({ title, number, className }) => {
  return (
    <div
      style={number && { height: 40 }}
      className={className + " badge-style"}
    >
      {title}
    </div>
  );
};

export default Badge;
