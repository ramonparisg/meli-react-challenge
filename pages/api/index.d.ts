type Author = { name: string; lastname: string };
type SearchApiResponse = {
  author: Author;
  categories: string[];
  items: Array<ItemResumeApiDto>;
};

type ItemResumeApiDto = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

type ItemDetailApiResponse = {
  author: Author;
  item: ItemResumeApiDto & { sold_quantity: number; description: string };
};
