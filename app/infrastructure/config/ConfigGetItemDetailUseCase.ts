import { MeLiApiRestAdapter } from "../http/MeLiApi/MeLiApiRestAdapter";
import { GetItemDetailUseCase } from "@useCases/GetItemDetailUseCase";
import { IProductDomainSystemPort } from "@ports/IProductDomainSystemPort";
import { IGetItemDetailUseCase } from "@useCases/IGetItemDetailUseCase";

function getItemDetailUseCase(
  productDomainSystemPort: IProductDomainSystemPort
): IGetItemDetailUseCase {
  return new GetItemDetailUseCase(productDomainSystemPort);
}

export default getItemDetailUseCase(new MeLiApiRestAdapter());
