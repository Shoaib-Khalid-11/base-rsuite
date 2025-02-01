import { useGetMenuMaster, useToggleDrawerOpen } from "hooks/menu";
import {
  Box,
  useBreakpointValue,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";

import { DrawerHeader, DrawerRoot, DrawerTitle } from "components/ui/drawer";
import { DRAWER_WIDTH } from "configs";
interface MainDrawrProps {
  window?: () => Window;
}
export const MainDrawr: React.FC<MainDrawrProps> = ({ window }) => {
  const handleDrawr = useToggleDrawerOpen();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  const downLG = useBreakpointValue({ base: true, lg: false });
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      as={"nav"}
      flexShrink={{ md: 0 }}
      zIndex={1200}
      aria-label="mailbox folders"
    >
      {downLG ? (
        <Box></Box>
      ) : (
        // <></>
        <DrawerRoot
          open={drawerOpen}
          contained
          placement={"start"}
          // onClose={() => handleDrawr.mutate(!drawerOpen)}
          onOpenChange={(e: { open: boolean }) => handleDrawr.mutate(e.open)}
          size={"sm"}
          container={container}
        >
          {/* <DrawerBackdrop /> */}

          <DrawerContent>
            <DrawerBody
              display={{ base: "block", lg: "none" }}
              width={DRAWER_WIDTH}
              boxSizing={"border-box"}
              borderRight={"1px solid grey.300"}
              height={"100vh"}
              backgroundImage={"none"}
              boxShadow={"inherit"}
            >
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
              </DrawerHeader>
            </DrawerBody>
          </DrawerContent>
        </DrawerRoot>
      )}
    </Box>
  );
};

export default MainDrawr;
