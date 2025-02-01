import { Box, Container, Flex } from "@chakra-ui/react";
import { AppIconButton } from "components/base";
import { useColorMode } from "components/ui/color-mode";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Container>
        <Flex py={2} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <AppIconButton
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
    </>
  );
};

export default NavBar;
