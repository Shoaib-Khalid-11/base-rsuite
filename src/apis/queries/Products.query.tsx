import { useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { ProductsService } from "services/products.service";
import { Product } from "types/products.model";
const productsServices = new ProductsService();
export const GetProducts = () => {
  const { data, error, isError, isSuccess, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => productsServices.getAllProducts(),
  });
  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar("Products fetched successfully", { variant: "success" });
    }
    if (isError) {
      enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
    }
  }, [isSuccess, isError, error]);
  return {
    productsResponse: data,
    productsError: error,
    productsLoading: isLoading,
  };
};
export const GetProductById = (id: string) => {
  const { data, error, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => productsServices.getProductById(id),
  });
  if (isSuccess) {
    enqueueSnackbar("Product fetched successfully", { variant: "success" });
  }
  if (isError) {
    enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
  }
  return {
    productByIdResponse: data,
    productByIdError: error,
    productByIdLoading: isLoading,
  };
};
