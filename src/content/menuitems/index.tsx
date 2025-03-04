import { useYoutubeStoreHook } from "global/hooks";
import { yt_home_path, yt_trending_path } from "global/routes/connections";
import { NavItemType } from "global/types";
import { FormattedMessage } from "react-intl";
export const useMenuItems = () => {
  const { setYoutubeLinkReducer } = useYoutubeStoreHook();
  const menuItem: { items?: NavItemType[]; youtube?: NavItemType[] } = {
    items: [
      {
        id: "single-home",
        title: <FormattedMessage id="home" defaultMessage="Home" />,
        type: "group",
        url: "/",
        icon: "bx:home",
      },
      {
        id: "dashboard",
        title: <FormattedMessage id="dashboard" defaultMessage="Dashboard" />,
        type: "group",
        url: "/dashboard",
        icon: "bx:bar-chart-alt",
      },
    ], // Keep other items
    youtube: [
      {
        id: "single-home",
        title: <FormattedMessage id="home" defaultMessage="Home" />,
        type: "group",
        url: yt_home_path(),
        icon: "bx:home",
        onclick: () => {
          setYoutubeLinkReducer("");
        }, // Call the function from the store
      },
      {
        id: "single-home",
        title: <FormattedMessage id="trending" defaultMessage="Trending" />,
        type: "group",
        url: yt_trending_path(),
        icon: "streamline:trending-content",
      },
    ], // Add YouTube items from the hook
  };

  return menuItem;
};

export default useMenuItems;
