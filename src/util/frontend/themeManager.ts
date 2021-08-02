enum Theme {
  DARK = "dark",
  LIGHT = "light"
}

function setTheme(theme: Theme) {
  const root = window.document.documentElement;
  root.classList.remove(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  root.classList.add(theme);
  localStorage.setItem("theme", theme);
}

function loadSavedTheme(): Theme {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === null || savedTheme == Theme.DARK) {
    return Theme.DARK;
  } else {
    return Theme.LIGHT;
  }
}

export { setTheme, loadSavedTheme, Theme };
