import { StyledEngineProvider } from "@mui/material";
import {
  AppMUICard,
  AppMUICardContent,
  AppMUICardHeader,
  AppMUICardMedia,
  AppMUIContainer,
  AppMUIGrid,
} from "global/components/base";
import Loader from "global/components/custom/Loader";
import { useAppStore } from "global/hooks";
import { GetProducts } from "global/queries/Products.query";
const Dashboard = () => {
  const {
    appStateValue: { container },
  } = useAppStore();
  const { productsResponse, productsLoading } = GetProducts();
  return (
    <>
      {productsLoading && <Loader />}
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
                    <AppMUICardMedia component="img" image={product.image} />
                    <AppMUICardContent>{product.description}</AppMUICardContent>
                  </AppMUICard>
                </AppMUIGrid>
              );
            })}
          </AppMUIGrid>
        </StyledEngineProvider>
      </AppMUIContainer>
    </>
  );
};

export default Dashboard;
