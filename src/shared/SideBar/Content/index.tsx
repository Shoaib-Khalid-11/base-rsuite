import SimpleBarScroll from "components/third-party/SimpleBarScroll";
import Navigation from "./Navigation";
import NavUser from "./NavUser";

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
