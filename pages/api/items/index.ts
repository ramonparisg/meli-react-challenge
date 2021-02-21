import type { NextApiRequest, NextApiResponse } from "next";
import searchItemUseCase from "@config/ConfigSearchItemUseCase";
import { SearchResult } from "@domain/SearchResult";
import author from "@dto/AuthorDto";
import { buildLogger } from "@config/LoggerConfig";
const log = buildLogger("/api/items");

const search = (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<SearchApiResponse> => {
  return new Promise((resolve, reject) => {
    const query = req.query.q as string;
    if (!query) {
      log.error("No query sent");
      res.status(400).json({ error: "No query sent" });
      reject("No query sent");
      return;
    }

    log.info(`Request with query: ${query} received`);

    searchItemUseCase
      .searchItems(query)
      .then((searchResult) => {
        const searchApiResponse = mapToResponseDto(searchResult);
        res.status(200).json(searchApiResponse);
        log.info(`Request with query: ${query} responded with status 200`);
        resolve(searchApiResponse);
      })
      .catch((e) => {
        log.error(e);
        res.status(500).json({ error: e.message });
        reject(e);
      });
  });
};

function mapToResponseDto(searchResult: SearchResult): SearchApiResponse {
  return {
    ...author,
    categories:
      searchResult?.categories
        ?.filter((category) => !!category.name)
        .map((category) => category.name) ?? [],
    items: searchResult.results.slice(0, 4).map((result) => ({
      id: result.id,
      title: result.title,
      price: result.price,
      free_shipping: result.free_shipping,
      condition: result.condition,
      picture: result.picture,
    })),
  };
}

export default search;
