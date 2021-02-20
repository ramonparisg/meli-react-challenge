import { Category } from "./Category";
import { ItemResume } from "./ItemResume";

export interface SearchResult {
  query: string;
  mainCategory: Category;
  categories?: Category[];
  results: Array<ItemResume>;
}
