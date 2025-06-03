import SimpleBarScroll from "components/third-party/SimpleBarScroll";
import NavUser from "./NavUser";
interface SideBarContentProps {
  children?: React.ReactNode;
}
export const SideBarContent: React.FC<SideBarContentProps> = ({ children }) => {
  return (
    <>
      <SimpleBarScroll
        sx={{
          "& .simplebar-content": { display: "flex", flexDirection: "column" },
        }}
      >
        {children}
      </SimpleBarScroll>
      <NavUser />
    </>
  );
};

export default SideBarContent;
