import { Box, Container, Flex } from "@chakra-ui/react";
import { AppIconButton } from "components/base";
import { useColorMode } from "components/ui/color-mode";
import { useGetMenuMaster, useToggleDrawerOpen } from "hooks/menu";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const handleDrawr = useToggleDrawerOpen();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;
  return (
    <>
      <Box>
        <Container>
          <Flex py={2} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <AppIconButton
                onClick={() => handleDrawr.mutate(!drawerOpen)}
                variant={"ghost"}
                AppIconProps={{ icon: "line-md:menu-unfold-left" }}
              />
            </Box>
            <Box>
              <AppIconButton
                variant={"ghost"}
                color={colorMode === "light" ? "yellow.500" : "blue.500"}
                onClick={toggleColorMode}
                AppIconProps={{
                  icon:
                    colorMode === "light"
                      ? "line-md:moon-to-sunny-outline-loop-transition"
                      : "line-md:moon-rising-alt-loop",
                }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default NavBar;
