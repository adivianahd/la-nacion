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

const Typography = ({
  lead,
  color,
  isLeadWhite,
  size,
  weight,
  fontFamily,
  children,
  className,
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
      {lead && !isLeadWhite && <span className="lead">{firstUpper(lead)}</span>}
      {lead && isLeadWhite && (
        <span className="leadWhite">{firstUpper(lead) + `${". "}`}</span>
      )}
      {firstUpper(`${children}`)}
    </p>
  );
};

export default Typography;
