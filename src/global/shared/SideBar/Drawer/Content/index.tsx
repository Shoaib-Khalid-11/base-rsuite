import SimpleBarScroll from "global/components/third-party/SimpleBarScroll";
import Navigation from "./Navigation";
import { NavUser } from "global/components/custom";

const SideBarContent = () => {
  return (
    <>
      <SimpleBarScroll
        sx={{
          "& .simplebar-content": { display: "flex", flexDirection: "column" },
        }}
      >
        <Navigation />
      </SimpleBarScroll>
      <NavUser />
    </>
  );
};

export default SideBarContent;
