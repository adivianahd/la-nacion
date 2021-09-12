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

const Typography = ({ color, size, weight, fontFamily }) => {
  return (
    <div
      style={{
        color: Color[color],
        fontSize: Size[size],
        fontWeight: Weight[weight],
        fontFamily: FontFamily[fontFamily],
      }}
      className="typography"
    >
      holllllaaa
    </div>
  );
};

export default Typography;
