
import { useTheme } from "providers/ThemeProvider";
import { Theme } from "util/frontend/themeManager";
import Styled from "./ToggleThemeButtonFlip.styles";

const ToggleThemeButtonFlip = () => {
  const { globalTheme, toggleGlobalTheme } = useTheme();

  return (
    <Styled.ButtonPos>
      <Styled.Flip>
        <Styled.InnerFlip
          flipped={globalTheme === Theme.DARK}
          onClick={toggleGlobalTheme}
        >
          <Styled.Front>
            <Styled.Moon />
          </Styled.Front>
          <Styled.Back>
            <Styled.Sun />
          </Styled.Back>
        </Styled.InnerFlip>
      </Styled.Flip>
    </Styled.ButtonPos>
  );
};

export default ToggleThemeButtonFlip;
