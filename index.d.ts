interface ItemSearch {
  author: Author;
  categories: string[];
  items: Array<ItemResume>;
}

interface Author {
  name: string;
  lastname: string;
}

interface ItemResume {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface ItemDetail {
  author: Author;
  item: ItemResume & { sold_quantity: number; description: string };
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
