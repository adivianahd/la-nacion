import "./styles.scss";
import * as theme from "../../../theme/_theme.module.scss";

const Color = {
  black: theme.dark,
  white: theme.white,
  lightBlue: theme.lightBlue,
  strongBlue: theme.strongBlue,
  alertYellow: theme.alertYellow,
  alertRed: theme.alertRed,
  greyByText: theme.lightBlackText,
  lightPink: theme.lightPink,
  strongPink: theme.strongPink,
  grey: theme.grey,
};

const Size = {
  XXXL: theme.fontXXXL,
  XXL: theme.fontXXL,
  XL: theme.fontXL,
  L: theme.fontL,
  LS: theme.fontLS,
  M: theme.fontM,
  S: theme.fontS,
  XS: theme.fontXS,
};

const Weight = {
  extraBold: theme.fontExtraBold,
  bold: theme.fontBold,
  medium: theme.fontMedium,
  light: theme.fontLight,
  extraLight: theme.fontExtraLight,
};

const FontFamily = {
  suecasLabBold: theme.suecasLabBold,
  suecasLabMedium: theme.suecasLabMedium,
};

const ColorLead = {
  blue: "lead-blue",
  strongBlue: "lead-strong-blue",
  white: "lead-white",
  black: "lead-black",
};

const Typography = ({
  lead,
  color,
  colorLead,
  size,
  weight,
  fontFamily,
  children,
  className,
  url,
}) => {
  const firstUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <p
      className={className + " typography"}
      style={{
        fontSize: Size[size],
        fontWeight: Weight[weight],
        color: Color[color],
        fontFamily: FontFamily[fontFamily],
      }}
    >
      {lead && (
        <span className={colorLead ? ColorLead[colorLead] : "lead-blue"}>
          {firstUpper(lead) + `${". "}`}
        </span>
      )}
      <a href={url}>{firstUpper(`${children}`)}</a>
    </p>
  );
};

export default Typography;
