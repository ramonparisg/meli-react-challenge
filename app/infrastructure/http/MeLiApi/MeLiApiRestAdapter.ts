import { RestClientTemplate } from "../RestClientTemplate";
import { IMeLiSystemPort } from "@ports/IMeLiSystemPort";
import { Category } from "@domain/Category";
import { SearchResult } from "@domain/SearchResult";
import { MELI_API_BASE_URL } from "@env";
import { categoryMap, searchResultMap } from "../../mappers/DomainObjectMapper";

export class MeLiApiRestAdapter
  extends RestClientTemplate
  implements IMeLiSystemPort {
  constructor() {
    super(MELI_API_BASE_URL);
  }

  async searchCategoryRelationsById(categoryId: string): Promise<Category[]> {
    const categories = await this.get<MeLiApiCategory>(
      `/categories/${categoryId}`
    );

    return categoryMap(categories);
  }

  async searchItemsByQuery(query: string): Promise<SearchResult> {
    const apiSearchResponse = await this.get<MeLiApiSearchResponse>(
      `/sites/MLA/search`,
      {
        q: query,
      }
    );

    return searchResultMap(apiSearchResponse);
  }
}
