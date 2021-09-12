import "./styles.scss";

const GeneralButton = ({ title, onCLick, Icon, style }) => {
  return (
    <button style={style} class="general-button-style" onClick={() => onCLick}>
      {title.toUpperCase()}
      {Icon && <Icon class="icon-button" />}
    </button>
  );
};

export default GeneralButton;
