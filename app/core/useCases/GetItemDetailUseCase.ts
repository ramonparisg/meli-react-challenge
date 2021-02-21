import { IGetItemDetailUseCase } from "@useCases/IGetItemDetailUseCase";
import { ItemDetail } from "@domain/ItemDetail";
import { IProductDomainSystemPort } from "@ports/IProductDomainSystemPort";

export class GetItemDetailUseCase implements IGetItemDetailUseCase {
  private readonly productDomainPort: IProductDomainSystemPort;

  constructor(productDomainPort: IProductDomainSystemPort) {
    this.productDomainPort = productDomainPort;
  }

  async findById(id: string): Promise<ItemDetail> {
    const itemDetailWithoutDescription = await this.productDomainPort.findItemById(
      id
    );
    const description = await this.productDomainPort.findItemDescriptionById(
      id
    );
    return { ...itemDetailWithoutDescription, description };
  }
}
