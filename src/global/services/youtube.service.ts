import { HEADERS } from "global/configs/youtube.config";
import { ApiBaseService, ApiResponse } from "./api_base.service";

export class YoutubeService extends ApiBaseService {
  private static readonly BASE_URL = import.meta.env.VITE_YT_API_URL;

  constructor() {
    super(YoutubeService.BASE_URL); // ✅ Pass the stored URL
  }
  public getHome(): Promise<ApiResponse<unknown[]>> {
    return this.get("/home", {
      headers: HEADERS,
    });
  }
}
