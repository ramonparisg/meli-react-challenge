import { RestClientTemplate } from "../RestClientTemplate";
import { BFF_API_URL } from "@env";
import { buildLogger } from "@config/LoggerConfig";

class BaseApiAdapter extends RestClientTemplate {
  constructor() {
    super(BFF_API_URL, buildLogger("BaseApiAdapter"));
  }

  async search(query: string): Promise<SearchApiResponse> {
    return await this.get<SearchApiResponse>("/api/items", { q: query });
  }

  async findItemById(itemId: string): Promise<ItemDetailApiResponse> {
    return await this.get<ItemDetailApiResponse>(`/api/items/${itemId}`);
  }
}

export default new BaseApiAdapter();
