import "./styles.scss";

const Button = ({ title, onCLick, Icon, style }) => {
  return (
    <button
      style={style}
      className="general-button-style"
      onClick={() => onCLick}
    >
      {title.toUpperCase()}
      {Icon && <Icon className="icon-button" />}
    </button>
  );
};

export default Button;