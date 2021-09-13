import "./styles.scss";

const Button = ({ children, onCLick, Icon, className }) => {
  return (
    <button
      className={`${className + " general-button-style"}`}
      onClick={() => onCLick}
    >
      {children.toUpperCase()}
      {Icon && <Icon className="icon-button" />}
    </button>
  );
};

export default Button;
