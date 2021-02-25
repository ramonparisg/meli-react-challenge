import { MeLiApiRestAdapter } from "../http/MeLiApi/MeLiApiRestAdapter";
import { GetItemDetailUseCase } from "@useCases/GetItemDetailUseCase";
import { IProductDomainSystemPort } from "@ports/IProductDomainSystemPort";
import { IGetItemDetailUseCase } from "@useCases/IGetItemDetailUseCase";
import { ISearchEngineSystemPort } from "@ports/ISearchEngineSystemPort";

function getItemDetailUseCase(
  productDomainSystemPort: IProductDomainSystemPort,
  searchEnchineSystemPort: ISearchEngineSystemPort
): IGetItemDetailUseCase {
  return new GetItemDetailUseCase(
    productDomainSystemPort,
    searchEnchineSystemPort
  );
}

export default getItemDetailUseCase(
  new MeLiApiRestAdapter(),
  new MeLiApiRestAdapter()
);
