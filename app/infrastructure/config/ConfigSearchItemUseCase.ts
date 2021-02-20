import { MeLiApiRestAdapter } from "../http/MeLiApi/MeLiApiRestAdapter";
import { SearchItemUseCase } from "@useCases/SearchItemUseCase";
import { IMeLiSystemPort } from "@ports/IMeLiSystemPort";
import { ISearchItemUseCase } from "@useCases/ISearchItemUseCase";

function searchItemUseCase(
  mercadoLibrePort: IMeLiSystemPort
): ISearchItemUseCase {
  return new SearchItemUseCase(mercadoLibrePort);
}

export default searchItemUseCase(new MeLiApiRestAdapter());
