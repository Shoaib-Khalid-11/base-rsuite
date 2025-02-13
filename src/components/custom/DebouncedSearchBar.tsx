import { useRef, useState } from "react";
import { debounce } from "lodash";
import { AppIcon, AppMUIBox, AppMUIIconButton } from "components/base";
import AppMUITextField from "components/base/AppMUITextField";
import { InputAdornment } from "@mui/material";
const DebouncedSearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = debounce((query: string) => {
    console.log("Searching for:", query);
  }, 500);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setTimeout(() => searchRef.current?.focus(), 100); // Auto-focus with delay
  };
  return (
    <>
      <AppMUIBox sx={{ display: "flex", alignItems: "center" }}>
        {showSearch && (
          <AppMUITextField
            inputRef={searchRef}
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 4,
              backgroundColor: showSearch ? "white" : "transparent",
              transition: "all 0.2s ease-in-out",
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AppIcon icon={"bx:search-alt-2"} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <AppMUIIconButton
                      onClick={() => {
                        setSearchQuery("");
                        handleSearch("");
                        setShowSearch(false);
                      }}
                    >
                      <AppIcon
                        icon={"bx:x"}
                        onClick={() => {
                          setSearchQuery("");
                          handleSearch("");
                        }}
                      />
                    </AppMUIIconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
        {!showSearch && (
          <AppMUIIconButton onClick={toggleSearch} size="large">
            <AppIcon icon={"bx:search-alt"} />
          </AppMUIIconButton>
        )}
      </AppMUIBox>
    </>
  );
};

export default DebouncedSearchBar;
