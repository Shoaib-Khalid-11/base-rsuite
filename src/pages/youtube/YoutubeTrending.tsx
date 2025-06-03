import {
  AppMUIBox,
  AppMUIButton,
  AppMUITab,
  AppMUITabs,
} from "components/elements/base";
import { Trending } from "types";
import { useState } from "react";

export const YoutubeTrending = () => {
  const [value, setValue] = useState<Trending>(Trending.Now);
  const handleChange = (_: React.SyntheticEvent, newValue: Trending) => {
    setValue(newValue);
  };
  return (
    <>
      <AppMUITabs
        component={AppMUIBox}
        variant="fullWidth"
        value={value}
        onChange={handleChange}
      >
        <AppMUITab label="NOW" value={Trending.Now} component={AppMUIButton} />
        <AppMUITab
          label="Music"
          value={Trending.Music}
          component={AppMUIButton}
        />
        <AppMUITab
          label="Gaming"
          value={Trending.Games}
          component={AppMUIButton}
        />
        <AppMUITab
          label="Films"
          value={Trending.Movies}
          component={AppMUIButton}
        />
      </AppMUITabs>
    </>
  );
};

export default YoutubeTrending;
