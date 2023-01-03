import { useTheme } from "@/hooks/useTheme";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeButton = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button
      className="flex items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-blue-600"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light" : "Dark"} Mode{" "}
      {theme === "dark" ? <MdOutlineLightMode size="20" /> : <MdOutlineDarkMode size="20" />}
    </button>
  );
};

export default DarkModeButton;
