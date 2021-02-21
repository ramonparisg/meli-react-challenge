import { MeLiApiRestAdapter } from "../http/MeLiApi/MeLiApiRestAdapter";
import { SearchItemUseCase } from "@useCases/SearchItemUseCase";
import { ISearchEngineSystemPort } from "@ports/ISearchEngineSystemPort";
import { ISearchItemUseCase } from "@useCases/ISearchItemUseCase";

function searchItemUseCase(
  mercadoLibrePort: ISearchEngineSystemPort
): ISearchItemUseCase {
  return new SearchItemUseCase(mercadoLibrePort);
}

export default searchItemUseCase(new MeLiApiRestAdapter());
