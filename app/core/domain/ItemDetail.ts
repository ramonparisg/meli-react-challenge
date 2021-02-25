import { ItemResume } from "@domain/ItemResume";

export interface ItemDetail extends ItemResume {
  sold_quantity: number;
  description: string;
  categoryId: string;
  parentCategories: string[];
}
