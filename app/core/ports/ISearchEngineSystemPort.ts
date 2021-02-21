import { SearchResult } from "@domain/SearchResult";
import { Category } from "@domain/Category";

export interface ISearchEngineSystemPort {
  searchItemsByQuery(query: string): Promise<SearchResult>;
  searchCategoryRelationsById(categoryId: string): Promise<Category[]>;
}
