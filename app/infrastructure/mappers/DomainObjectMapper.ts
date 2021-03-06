import { Category } from "@domain/Category";
import { SearchResult } from "@domain/SearchResult";
import { ItemResume } from "@domain/ItemResume";
import { ItemDetail } from "@domain/ItemDetail";

export function mapCategory(meLiApiCategory: MeLiApiCategory): Category[] {
  return (
    meLiApiCategory?.path_from_root?.map(({ id, name }) => ({ id, name })) ?? []
  );
}

export function mapDescription(
  meLiApiDescription: MeLiApiDescriptionResponse
): string {
  if (meLiApiDescription) {
    return meLiApiDescription.plain_text ?? meLiApiDescription.text;
  }

  return "";
}

export function mapSearchResult(
  meLiSearchDTO: MeLiApiSearchResponse
): SearchResult {
  if (meLiSearchDTO) {
    return {
      query: meLiSearchDTO.query,
      mainCategory: findCategoryWithMoreResults(meLiSearchDTO),
      results: meLiSearchDTO?.results?.map(mapResultsToItems),
    };
  }

  return undefined;
}

export function mapItemDetail(meLiItemDetail: MeLiApiItemDetail): ItemDetail {
  if (meLiItemDetail) {
    const itemResume = mapResultsToItems(meLiItemDetail);
    return {
      ...itemResume,
      sold_quantity: meLiItemDetail.sold_quantity,
      description: "",
      categoryId: meLiItemDetail.category_id,
      parentCategories: [],
    };
  }

  return undefined;
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
      amount: result.price ? Math.trunc(result.price) : 0,
      decimals: result.price
        ? Number((result.price % 1).toFixed(2).replace("0.", ""))
        : 0,
    },
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result?.shipping?.free_shipping,
  };
}
