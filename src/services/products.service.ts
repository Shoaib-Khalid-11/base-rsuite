import { Product } from "types/products.model";
import { ApiBaseService, ApiResponse } from "./api_base.service";

export class ProductsService extends ApiBaseService {
  public getAllProducts(): Promise<ApiResponse<Product[]>> {
    return this.get("/products");
  }
  public getProductById(id: string): Promise<ApiResponse<Product>> {
    return this.get(`/products/${id}`);
  }
}
