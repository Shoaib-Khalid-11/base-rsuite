import { useYoutubeStoreHook } from "global/hooks";
import { yt_home_path } from "global/routes/connections";
import { NavItemType } from "global/types";
import { FormattedMessage } from "react-intl";

export const sidebarMenuItems: NavItemType[] = [
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
];
export const useYoutubeMenuItems = () => {
  const { setYoutubeLinkReducer } = useYoutubeStoreHook(); // Assuming this hook provides a setter function

  const youtubeMenuItems: NavItemType[] = [
    {
      id: "single-home",
      title: <FormattedMessage id="home" defaultMessage="Home" />,
      type: "group",
      url: yt_home_path(),
      icon: "bx:home",
      onclick: () => {
        setYoutubeLinkReducer("");
        console.log("clicked home");
      }, // Call the function from the store
    },
  ];

  return youtubeMenuItems;
};
