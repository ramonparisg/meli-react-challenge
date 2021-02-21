import { RestClientTemplate } from "../RestClientTemplate";
import { ISearchEngineSystemPort } from "@ports/ISearchEngineSystemPort";
import { Category } from "@domain/Category";
import { SearchResult } from "@domain/SearchResult";
import { MELI_API_BASE_URL } from "@env";
import {
  mapCategory,
  mapDescription,
  mapItemDetail,
  mapSearchResult,
} from "../../mappers/DomainObjectMapper";
import { IProductDomainSystemPort } from "@ports/IProductDomainSystemPort";
import { ItemDetail } from "@domain/ItemDetail";
import { buildLogger } from "@config/LoggerConfig";

export class MeLiApiRestAdapter
  extends RestClientTemplate
  implements ISearchEngineSystemPort, IProductDomainSystemPort {
  constructor() {
    super(MELI_API_BASE_URL, buildLogger("MeLiApiRestAdapter"));
  }

  async findItemDescriptionById(itemId: string): Promise<string> {
    const meLiApiDescriptionResponse = await this.get<MeLiApiDescriptionResponse>(
      `/items/${itemId}/description`
    );
    return mapDescription(meLiApiDescriptionResponse);
  }

  async findItemById(itemId: string): Promise<ItemDetail> {
    const meLiItemDetail = await this.get<MeLiApiItemDetail>(
      `/items/${itemId}`
    );

    return mapItemDetail(meLiItemDetail);
  }

  async searchCategoryRelationsById(categoryId: string): Promise<Category[]> {
    const categories = await this.get<MeLiApiCategory>(
      `/categories/${categoryId}`
    );

    return mapCategory(categories);
  }

  async searchItemsByQuery(query: string): Promise<SearchResult> {
    const apiSearchResponse = await this.get<MeLiApiSearchResponse>(
      `/sites/MLA/search`,
      {
        q: query,
      }
    );

    return mapSearchResult(apiSearchResponse);
  }
}
