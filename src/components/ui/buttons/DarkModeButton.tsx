import { useTheme } from "~/hooks/useTheme";
import { memo } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { twJoin } from "tailwind-merge";

export function DarkModeButton() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      type="button"
      aria-label="dark mode"
      className={twJoin(
        "flex items-center justify-center space-x-2 rounded-md",
        "bg-blue-500 px-4 py-2 text-white",
        "transition-all duration-200 ease-in-out",
        "hover:bg-blue-600"
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span>{theme === "dark" ? "Light" : "Dark"} Mode </span>
      {theme === "dark" ? <MdOutlineLightMode size="20" /> : <MdOutlineDarkMode size="20" />}
    </button>
  );
}

memo(DarkModeButton);
