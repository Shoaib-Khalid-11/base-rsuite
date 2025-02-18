import { StyledEngineProvider } from "@mui/material";
import {
  AppMUIBox,
  AppMUICard,
  AppMUICardContent,
  AppMUICardHeader,
  AppMUICardMedia,
  AppMUIContainer,
  AppMUIMasonry,
} from "global/components/base";
import Loader from "global/components/custom/Loader";
import { useAppStore } from "global/hooks";
import { GetProducts } from "global/apis/queries/Products.query";
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
          <AppMUIMasonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
            {productsResponse?.map((product) => {
              return (
                <AppMUIBox key={product.id}>
                  <AppMUICard>
                    <AppMUICardHeader title={product.title} />
                    <AppMUICardMedia component="img" image={product.image} />
                    <AppMUICardContent>{product.description}</AppMUICardContent>
                  </AppMUICard>
                </AppMUIBox>
              );
            }) ?? []}
          </AppMUIMasonry>
        </StyledEngineProvider>
      </AppMUIContainer>
    </>
  );
};

export default Dashboard;
