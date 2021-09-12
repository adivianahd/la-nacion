import "./styles.scss";

const ContainerImage = ({ style, src, alt, avatar }) => {
  return (
    <img
      style={style}
      class={avatar ? "avatar-style" : "img-style"}
      src={src}
      alt={alt}
    />
  );
};

export default ContainerImage;
