import { Category } from "@domain/Category";
import { SearchResult } from "@domain/SearchResult";
import { ItemResume } from "@domain/ItemResume";
import { ItemDetail } from "@domain/ItemDetail";

export function mapCategory(meLiApiCategory: MeLiApiCategory): Category[] {
  return meLiApiCategory?.path_from_root?.map(({ id, name }) => ({ id, name }));
}

export function mapDescription(
  meLiApiDescription: MeLiApiDescriptionResponse
): string {
  return meLiApiDescription?.plain_text ?? meLiApiDescription.text;
}

export function mapSearchResult(
  meLiSearchDTO: MeLiApiSearchResponse
): SearchResult {
  return {
    query: meLiSearchDTO.query,
    mainCategory: findCategoryWithMoreResults(meLiSearchDTO),
    results: meLiSearchDTO?.results?.map(mapResultsToItems),
  };
}

export function mapItemDetail(meLiItemDetail: MeLiApiItemDetail): ItemDetail {
  const itemResume = mapResultsToItems(meLiItemDetail);
  return {
    ...itemResume,
    sold_quantity: meLiItemDetail.sold_quantity,
    description: "",
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

function mapResultsToItems(result: MeLiApiItemResume): ItemResume {
  return {
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
  };
}
