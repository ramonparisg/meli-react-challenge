interface MeLiApiSearchResponse {
  site_id: string;
  query: string;
  results: Array<{
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
  }>;
  filters: Array<MeLiApiFilters>;
  available_filters: Array<MeLiApiFilters>;
}

interface MeLiApiFilters {
  id: string;
  name: string;
  type: string;
  values: Array<{
    id: string;
    name: string;
    results: number;
  }>;
}

interface MeLiApiCategory {
  id: string;
  name: string;
  path_from_root: Array<{
    id: string;
    name: string;
  }>;
}
