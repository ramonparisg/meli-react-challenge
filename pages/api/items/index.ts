import type { NextApiRequest, NextApiResponse } from "next";
import searchItemUseCase from "@config/ConfigSearchItemUseCase";
import { SearchResult } from "@domain/SearchResult";
import author from "@dto/AuthorDto";

interface SearchApiResponse {
  author: { name: string; lastname: string };
  categories: string[];
  items: Array<{
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
  }>;
}

const search = (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    searchItemUseCase
      .searchItems(req.query.q as string)
      .then((searchResult) => {
        const searchApiResponse = mapToResponseDto(searchResult);
        res.status(200).json(searchApiResponse);
        resolve(searchApiResponse);
      })
      .catch((e) => {
        console.error(e);
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
