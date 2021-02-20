import { SearchResult } from "@domain/SearchResult";
import { Category } from "@domain/Category";

export interface IMeLiSystemPort {
  searchItemsByQuery(query: string): Promise<SearchResult>;
  searchCategoryRelationsById(categoryId: string): Promise<Category[]>;
}
