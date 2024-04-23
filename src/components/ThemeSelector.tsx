import { signal, type Signal } from "@preact/signals";
import clsx from "clsx";
import { type FunctionComponent } from "preact";
import localIconDark from "../img/dark.svg?raw";
import localIconLight from "../img/light.svg?raw";

export type Theme = "light" | "dark";

export interface Props {
  className?: string;
}

const LOCAL_STORAGE_KEY_THEME = "theme";

const activeTheme: Signal<Theme> = signal(getLocalStorageThemeValue());

const ThemeSelector: FunctionComponent<Props> = ({ className }) => {
  return (
    <button
      className={clsx(
        "rounded-full bg-slate-400 dark:bg-slate-700 p-1 lg:p-2 transition-colors",
        className,
      )}
      onClick={() => {
        activeTheme.value =
          getLocalStorageThemeValue() === "light" ? "dark" : "light";

        setThemeStorage({ activeThemeValue: activeTheme.value });
      }}
      type="button"
    >
      <span
        className="block w-4 h-4 text-slate-100 dark:text-slate-400"
        dangerouslySetInnerHTML={{
          __html:
            activeTheme.value === "light" ? localIconLight : localIconDark,
        }}
      />
    </button>
  );
};

export default ThemeSelector;

/**
 * Sets the theme value in the local storage and applies the theme to the document.
 * If `activeThemeValue` is provided, it will be used as the theme value.
 * If `activeThemeValue` is not provided, the theme value will be retrieved from the local storage.
 * If neither the local storage nor the active theme value is set, a default value based on the user's preferred color scheme will be used.
 * @param {Object} options - The options object.
 * @param {Theme} options.activeThemeValue - The active theme value.
 */
export function setThemeStorage({
  activeThemeValue,
}: {
  activeThemeValue?: Theme;
} = {}) {
  const localStorageThemeValue = getLocalStorageThemeValue();
  const themeValue = activeThemeValue || localStorageThemeValue;

  if (!themeValue) {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_THEME,
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    );
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, themeValue);
  }

  if (themeValue === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function getLocalStorageThemeValue(): Theme {
  return localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as Theme;
}
