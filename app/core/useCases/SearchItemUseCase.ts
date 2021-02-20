import { SearchResult } from "@domain/SearchResult";
import { IMeLiSystemPort } from "@ports/IMeLiSystemPort";
import { ISearchItemUseCase } from "@useCases/ISearchItemUseCase";

export class SearchItemUseCase implements ISearchItemUseCase {
  private readonly mercadoLibrePort: IMeLiSystemPort;

  constructor(mercadoLibrePort: IMeLiSystemPort) {
    this.mercadoLibrePort = mercadoLibrePort;
  }

  async searchItems(query: string): Promise<SearchResult> {
    const searchResult = await this.mercadoLibrePort.searchItemsByQuery(query);

    let categories = [];
    if (searchResult?.mainCategory?.id) {
      categories = await this.mercadoLibrePort.searchCategoryRelationsById(
        searchResult.mainCategory.id
      );
    }

    return { ...searchResult, categories: categories };
  }
}
