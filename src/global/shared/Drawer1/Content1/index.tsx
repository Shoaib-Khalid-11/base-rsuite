import SimpleBarScroll from "global/components/third-party/SimpleBarScroll";
import NavUser1 from "./NavUser1";
interface SideBarContentProps {
  children?: React.ReactNode;
}
const SideBarContent1: React.FC<SideBarContentProps> = ({ children }) => {
  return (
    <>
      <SimpleBarScroll
        sx={{
          "& .simplebar-content": { display: "flex", flexDirection: "column" },
        }}
      >
        {children}
      </SimpleBarScroll>
      <NavUser1 />
    </>
  );
};

export default SideBarContent1;
