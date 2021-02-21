import { ItemDetail } from "@domain/ItemDetail";

export interface IGetItemDetailUseCase {
  findById(id: string): Promise<ItemDetail>;
}
