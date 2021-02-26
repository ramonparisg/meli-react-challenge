import { RestClientTemplate } from "../RestClientTemplate";
import { BFF_API_URL } from "@env";
import { buildLogger } from "@config/LoggerConfig";

export class BaseApiAdapter extends RestClientTemplate {
  constructor() {
    super(BFF_API_URL, buildLogger("BaseApiAdapter"));
  }

  async search(query: string): Promise<SearchApiResponse> {
    return await this.get<SearchApiResponse>("/items", { q: query });
  }

  async findItemById(itemId: string): Promise<ItemDetailApiResponse> {
    return await this.get<ItemDetailApiResponse>(`/items/${itemId}`);
  }
}

export default new BaseApiAdapter();
