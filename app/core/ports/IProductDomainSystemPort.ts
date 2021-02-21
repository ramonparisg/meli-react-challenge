import { ItemDetail } from "@domain/ItemDetail";

export interface IProductDomainSystemPort {
  findItemById(itemId: string): Promise<ItemDetail>;
  findItemDescriptionById(itemId: string): Promise<string>;
}
