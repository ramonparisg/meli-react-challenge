import { IGetItemDetailUseCase } from "@useCases/IGetItemDetailUseCase";
import { ItemDetail } from "@domain/ItemDetail";
import { IProductDomainSystemPort } from "@ports/IProductDomainSystemPort";
import { ISearchEngineSystemPort } from "@ports/ISearchEngineSystemPort";

export class GetItemDetailUseCase implements IGetItemDetailUseCase {
  private readonly productDomainPort: IProductDomainSystemPort;
  private readonly searchEngineSystemPort: ISearchEngineSystemPort;

  constructor(
    productDomainPort: IProductDomainSystemPort,
    searchEngineSystemPort: ISearchEngineSystemPort
  ) {
    this.productDomainPort = productDomainPort;
    this.searchEngineSystemPort = searchEngineSystemPort;
  }

  async findById(id: string): Promise<ItemDetail> {
    const itemDetailWithoutDescription = await this.productDomainPort.findItemById(
      id
    );

    const categories = await this.searchEngineSystemPort.searchCategoryRelationsById(
      itemDetailWithoutDescription.categoryId
    );

    const description = await this.productDomainPort.findItemDescriptionById(
      id
    );
    return {
      ...itemDetailWithoutDescription,
      description,
      parentCategories: categories?.map((category) => category.name),
    };
  }
}
