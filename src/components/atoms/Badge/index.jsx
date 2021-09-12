import "./styles.scss";

const Badge = ({ title, number }) => {
  return (
    <div style={number && { height: 40 }} className="badge-style">
      {title}
    </div>
  );
};

export default Badge;
