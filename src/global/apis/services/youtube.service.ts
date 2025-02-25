import { HEADERS } from "global/configs/youtube.config";
import { ApiBaseService, ApiResponse } from "./api_base.service";
import { AxiosHeaders } from "axios";

export class YoutubeService extends ApiBaseService {
  private static readonly BASE_URL = import.meta.env.VITE_YT_API_URL;

  constructor() {
    super(YoutubeService.BASE_URL, AxiosHeaders.from(HEADERS));
    // this.headers = HEADERS); // ✅ Pass the stored URL
  }
  public getHome(
    token?: string,
    geo?: string,
    lang?: string
  ): Promise<ApiResponse<any>> {
    return this.get("/home", {
      params: {
        token: token,
        geo: geo,
        lang: lang,
      },
    });
  }
}
