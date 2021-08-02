import ToggleThemeButtonFlip from "components/atoms/ToggleThemeButtonFlip";
import type { AppProps } from "next/app";
import { ThemeProvider } from "providers/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <ToggleThemeButtonFlip />
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  );
}
export default MyApp;
