type MeLiApiSearchResponse = {
  site_id: string;
  query: string;
  results: Array<MeLiApiItemResume>;
  filters: Array<MeLiApiFilters>;
  available_filters: Array<MeLiApiFilters>;
};

type MeLiApiItemResume = {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  category_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
};

type MeLiApiItemDetail = MeLiApiItemResume & {
  sold_quantity: number;
  description?: string;
};

type MeLiApiDescriptionResponse = {
  text: string;
  plain_text: string;
};

type MeLiApiFilters = {
  id: string;
  name: string;
  type: string;
  values: Array<{
    id: string;
    name: string;
    results?: number;
  }>;
};

type MeLiApiCategory = {
  id: string;
  name: string;
  path_from_root: Array<{
    id: string;
    name: string;
  }>;
};
