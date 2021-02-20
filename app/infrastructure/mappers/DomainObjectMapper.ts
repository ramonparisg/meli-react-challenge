import { Category } from "@domain/Category";
import { SearchResult } from "@domain/SearchResult";
import { ItemResume } from "@domain/ItemResume";

export function categoryMap(meLiApiCategory: MeLiApiCategory): Category[] {
  return meLiApiCategory?.path_from_root?.map(({ id, name }) => ({ id, name }));
}

export function searchResultMap(
  meLiSearchDTO: MeLiApiSearchResponse
): SearchResult {
  return {
    query: meLiSearchDTO.query,
    mainCategory: findCategoryWithMoreResults(meLiSearchDTO),
    results: mapResultsToItems(meLiSearchDTO),
  };
}

function findCategoryWithMoreResults(
  meLiSearchDTO: MeLiApiSearchResponse
): Category {
  const categoryFilter =
    meLiSearchDTO.available_filters.find(({ id }) => id === "category") ||
    meLiSearchDTO.filters.find(({ id }) => id === "category");

  return categoryFilter?.values?.reduce((previousValue, currentValue) =>
    previousValue?.results > currentValue?.results
      ? previousValue
      : currentValue
  );
}

function mapResultsToItems(
  meLiSearchDTO: MeLiApiSearchResponse
): Array<ItemResume> {
  return meLiSearchDTO?.results?.map((result) => ({
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: result.price,
      decimals: 0,
    },
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result?.shipping?.free_shipping,
  }));
}
