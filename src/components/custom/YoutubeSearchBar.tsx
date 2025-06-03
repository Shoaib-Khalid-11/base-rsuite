import { useState } from "react";
import {
  AppIcon,
  AppMUIIconButton,
  AppMUIInputBase,
  AppMUIPaper,
} from "../elements/base";

export const YouTubeSearchBar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <AppMUIPaper
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", sm: 400 },
        borderRadius: 10,
        boxShadow: 2,
        padding: "2px 8px",
      }}
    >
      {/* Left-side Icon (Only visible on focus) */}
      {focused && (
        <AppMUIIconButton sx={{ p: "10px" }}>
          <AppIcon icon={"ri:search-2-line"} />
        </AppMUIIconButton>
      )}

      {/* Search Input */}
      <AppMUIInputBase
        sx={{ ml: 1, flex: 1, fontSize: "1rem" }}
        placeholder="Search"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      {/* Right-side Search Button */}
      <AppMUIIconButton sx={{ p: "10px" }}>
        <AppIcon icon={"wpf:search"} />
      </AppMUIIconButton>
    </AppMUIPaper>
  );
};
export default YouTubeSearchBar;
