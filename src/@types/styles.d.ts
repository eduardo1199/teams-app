import "styled-components/native";
import Theme from '../theme';

type ThemeType = typeof Theme;

declare module "styled-components/native" {
 export interface DefaultTheme extends ThemeType {}
}
