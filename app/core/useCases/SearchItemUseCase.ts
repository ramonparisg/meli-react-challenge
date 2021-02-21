import { SearchResult } from "@domain/SearchResult";
import { ISearchEngineSystemPort } from "@ports/ISearchEngineSystemPort";
import { ISearchItemUseCase } from "@useCases/ISearchItemUseCase";

export class SearchItemUseCase implements ISearchItemUseCase {
  private readonly searchEngineSystemPort: ISearchEngineSystemPort;

  constructor(searchEngineSystemPort: ISearchEngineSystemPort) {
    this.searchEngineSystemPort = searchEngineSystemPort;
  }

  async searchItems(query: string): Promise<SearchResult> {
    const searchResult = await this.searchEngineSystemPort.searchItemsByQuery(
      query
    );

    let categories = [];
    if (searchResult?.mainCategory?.id) {
      categories = await this.searchEngineSystemPort.searchCategoryRelationsById(
        searchResult.mainCategory.id
      );
    }

    return { ...searchResult, categories: categories };
  }
}
