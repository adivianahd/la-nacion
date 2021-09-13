import "./styles.scss";

const Button = ({ children, onCLick, Icon, style }) => {
  return (
    <button
      className={`${style + " general-button-style"}`}
      onClick={() => onCLick}
    >
      {children.toUpperCase()}
      {Icon && <Icon className="icon-button" />}
    </button>
  );
};

export default Button;
