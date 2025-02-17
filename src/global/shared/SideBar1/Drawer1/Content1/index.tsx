import SimpleBarScroll from "global/components/third-party/SimpleBarScroll";
import NavUser1 from "./NavUser1";

const SideBarContent1 = () => {
  return (
    <>
      <SimpleBarScroll
        sx={{
          "& .simplebar-content": { display: "flex", flexDirection: "column" },
        }}
      ></SimpleBarScroll>
      <NavUser1 />
    </>
  );
};

export default SideBarContent1;
