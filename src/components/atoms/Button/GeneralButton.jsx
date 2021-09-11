import "./styles.scss";

const GeneralButton = ({ title, onCLick, Icon, style }) => {
  return (
    <button style={style} class="generla-button-style" onClick={() => onCLick}>
      {title}
      {Icon && <Icon class="icon-button" />}
    </button>
  );
};

export default GeneralButton;
