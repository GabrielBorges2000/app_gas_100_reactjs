import 'styled-components';
import { theme } from '../styles/styles';

type Themetype = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Themetype {}

}