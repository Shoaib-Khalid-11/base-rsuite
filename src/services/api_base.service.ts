import axios, {
  AxiosHeaders,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { apiPrefix } from "configs/config";
import { merge } from "lodash";
// import { ok, err, type Result, Ok, Err } from "rusty-result-ts";

export type ApiResponse<T> = T;
// export type ApiBaseResponse

const unauthorizedCode = [401];
// const forbiddenCode = [403];

export class ApiBaseService {
  protected api: AxiosInstance;
  protected urlBase: string;

  constructor(basePath?: string) {
    this.urlBase = basePath ?? apiPrefix;

    this.api = axios.create({
      baseURL: this.urlBase,
      //   timeout: 10000,
    });

    // Attach Interceptors
    this.setupInterceptors();
  }

  /**
   * Setup request & response interceptors.
   */
  private setupInterceptors() {
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers = new AxiosHeaders({
          ...config.headers,
          Authorization: `Bearer ${token}`,
        });
      }
      return config;
    });

    this.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (!axios.isAxiosError(error)) return Promise.reject(error);

        const { response } = error;
        if (!response) return Promise.reject(error);

        if (unauthorizedCode.includes(response.status)) {
          return this.handleUnauthorized(error);
        }

        return Promise.reject(error);
      }
    );
  }

  /**
   * Handles token refresh when request fails due to 401 (Unauthorized).
   */
  private async handleUnauthorized(error: unknown) {
    return Promise.reject(error);
  }

  /**
   * Returns a new base Axios request config.
   */
  protected getConfig(
    headers: Record<string, string> = {}
  ): AxiosRequestConfig {
    return {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };
  }

  /**
   * Generic request wrapper.
   */
  private async request<T>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    subPath: string,
    data?: unknown,
    configOverrides?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    if (!subPath.startsWith("/")) subPath = `/${subPath}`;
    const config = merge(this.getConfig(), configOverrides);

    try {
      const response: AxiosResponse = await this.api.request({
        method,
        url: subPath,
        data,
        ...config,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * API CRUD Methods.
   */
  protected async get<T>(
    path: string,
    configOverrides?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("GET", path, undefined, configOverrides);
  }

  protected async post<T>(
    path: string,
    data: unknown,
    configOverrides?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("POST", path, data, configOverrides);
  }

  protected async put<T>(
    path: string,
    data: unknown,
    configOverrides?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("PUT", path, data, configOverrides);
  }

  protected async patch<T>(
    path: string,
    data: unknown,
    configOverrides?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("PATCH", path, data, configOverrides);
  }

  protected async delete<T>(
    path: string,
    configOverrides?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("DELETE", path, undefined, configOverrides);
  }
}
