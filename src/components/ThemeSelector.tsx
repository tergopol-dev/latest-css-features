import { signal, type Signal } from "@preact/signals";
import clsx from "clsx";
import { type FunctionComponent } from "preact";
import localIconDark from "../img/dark.svg?raw";
import localIconLight from "../img/light.svg?raw";

export type Theme = "light" | "dark";

export interface Props {
  className?: string;
}

const activeTheme: Signal<Theme> = signal("light");

const ThemeSelector: FunctionComponent<Props> = ({ className }) => {
  activeTheme.value =
    localStorage.getItem("theme") === "dark" ? "dark" : "light";

  return (
    <button
      className={clsx(
        "rounded-full bg-slate-400 dark:bg-slate-700 p-1 lg:p-2 transition-colors",
        className,
      )}
      onClick={() => {
        activeTheme.value =
          localStorage.getItem("theme") === "light" ? "dark" : "light";

        localStorage.setItem("theme", activeTheme.value);

        document.documentElement.classList.toggle("dark");
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

export const handleThemeStorage = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
