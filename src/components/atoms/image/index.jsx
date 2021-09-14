import "./styles.scss";

const Image = ({ style, src, alt, avatar, className }) => {
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

export default Image;
