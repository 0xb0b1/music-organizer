import { useState } from "react";
import { RiToggleFill, RiToggleLine } from "react-icons/ri";
import { useTheme } from "../../contexts/ThemeContext";

export const ChangeThemeButton = () => {
  const {theme, changeTheme} = useTheme()
  console.log("🚀 ~ file: ChangeThemeButton.tsx ~ line 7 ~ ChangeThemeButton ~ theme", theme)


  return (
    <button
      className="flex items-center ml-auto"
      onClick={changeTheme}
    >
      {theme === "dark" ? <RiToggleLine size={28} /> : <RiToggleFill size={28} />}
    </button>
  );
};
