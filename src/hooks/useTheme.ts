import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

const browser = typeof window !== "undefined";
const themeAtom = atomWithStorage(
  "theme",
  browser && matchMedia("(prefers-color-scheme: light)").matches ? "dark" : "light"
);

export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (!browser) return;

    localStorage.setItem("theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme] as const;
}
