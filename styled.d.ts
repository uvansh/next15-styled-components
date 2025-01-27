import { noSSR } from "next/dynamic";
import "styled-components";
noSSR
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}
