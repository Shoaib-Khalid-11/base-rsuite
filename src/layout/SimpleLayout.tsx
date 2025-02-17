import { StyledEngineProvider, useMediaQuery, useTheme } from "@mui/material";
import {
  AppMUIBox,
  AppMUICard,
  AppMUICardContent,
  AppMUICardHeader,
  AppMUICardMedia,
  AppMUIContainer,
  AppMUIGrid,
  AppMUIToolBar,
} from "global/components/base";
import { useAppStore } from "global/hooks";
// import NavBar from "shared/NavBar";
import Header from "global/shared/SideBar/Header";
import { MenuOrientation } from "global/types/config.model";
import Drawer from "global/shared/SideBar/Drawer";
import HorizontalBar from "global/shared/SideBar/Drawer/HorizantalBar";
import { useEffect } from "react";
import { useToggleDrawerOpen } from "global/hooks/menu";
import { GetProducts } from "global/queries/Products.query";
import { DRAWER_WIDTH } from "global/configs/config";
import Loader from "global/components/custom/Loader";

const SimpleLayout = () => {
  const theme = useTheme();
  const downXL = useMediaQuery(theme.breakpoints.down("xl"));
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const handlerDrawerOpen = useToggleDrawerOpen();
  const {
    appStateValue: { menuOrientation, miniDrawer, container },
  } = useAppStore();
  const isHorizontal =
    menuOrientation === MenuOrientation.HORIZONTAL && !downLG;
  useEffect(() => {
    if (!miniDrawer) {
      handlerDrawerOpen.mutate(!downXL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);
  const { productsResponse, productsLoading } = GetProducts();
  return (
    <>
      {productsLoading && <Loader />}
      <AppMUIBox sx={{ display: "flex", width: "100%" }}>
        <Header />
        {!isHorizontal ? <Drawer /> : <HorizontalBar />}
        <AppMUIBox
          component="main"
          sx={{
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            flexGrow: 1,
            p: { xs: 2, md: 3 },
          }}
        >
          <AppMUIToolBar
            sx={{
              mt: isHorizontal ? 8 : "inherit",
              mb: isHorizontal ? 2 : "inherit",
            }}
          />
          <AppMUIContainer
            maxWidth={container ? "xl" : false}
            sx={{
              xs: 0,
              ...(container && { px: { xs: 0, md: 2 } }),
              position: "relative",
              minHeight: "calc(100vh - 122px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <StyledEngineProvider injectFirst>
              <AppMUIGrid container spacing={4}>
                {productsResponse?.map((product) => {
                  return (
                    <AppMUIGrid
                      key={product.id}
                      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    >
                      <AppMUICard>
                        <AppMUICardHeader title={product.title} />
                        <AppMUICardMedia
                          component="img"
                          image={product.image}
                        />
                        <AppMUICardContent>
                          {product.description}
                        </AppMUICardContent>
                      </AppMUICard>
                    </AppMUIGrid>
                  );
                })}
              </AppMUIGrid>
            </StyledEngineProvider>
          </AppMUIContainer>
        </AppMUIBox>
      </AppMUIBox>
    </>
  );
};

export default SimpleLayout;
