/* eslint-disable @typescript-eslint/no-explicit-any */
import { HEADERS } from "configs/youtube.config";
import { ApiBaseService, ApiResponse } from "./api_base.service";
import { AxiosHeaders } from "axios";
import { GeoProps } from "types";

export class YoutubeService extends ApiBaseService {
  private static readonly BASE_URL = import.meta.env.VITE_YT_API_URL;

  constructor() {
    super(YoutubeService.BASE_URL, AxiosHeaders.from(HEADERS));
  }
  public getHome(
    token?: string,
    filters?: string,
    geo?: GeoProps,
    lang?: string
  ): Promise<ApiResponse<any>> {
    return this.get("/home", {
      params: {
        token: token ? token : filters ? filters : undefined,
        geo: geo,
        lang: lang,
      },
    });
  }
  public getTrending(
    geo?: GeoProps,
    type?: string,
    lang?: string
  ): Promise<ApiResponse<any>> {
    return this.get("/trending", {
      params: {
        geo: geo,
        type: type,
        lang: lang,
      },
    });
  }
}
