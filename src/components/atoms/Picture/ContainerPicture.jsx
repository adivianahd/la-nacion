import "./styles.scss";

const ContainerImage = ({ style, src, alt, avatar, className }) => {
  return (
    <img
      style={style}
      className={
        avatar
          ? `${className + " avatar-style"}`
          : `${className + " img-style"}`
      }
      src={src}
      alt={alt}
    />
  );
};

export default ContainerImage;
