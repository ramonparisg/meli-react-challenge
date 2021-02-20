import { SearchResult } from "@domain/SearchResult";

export interface ISearchItemUseCase {
  searchItems(query: string): Promise<SearchResult>;
}
