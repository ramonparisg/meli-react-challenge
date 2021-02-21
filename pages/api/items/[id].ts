import type { NextApiRequest, NextApiResponse } from "next";
import getItemDetailUseCase from "@config/ConfigGetItemDetailUseCase";
import { ItemDetail } from "@domain/ItemDetail";
import author from "@dto/AuthorDto";
import { buildLogger } from "@config/LoggerConfig";
const log = buildLogger("/api/items/[id]");

const handle = (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<ItemDetailApiResponse> => {
  return new Promise<ItemDetailApiResponse>((resolve, reject) => {
    const id = req?.query?.id;
    if (!id) {
      log.error("No ID sent");
      res.status(400).json({ error: "No ID sent" });
      reject("No ID sent");
      return;
    }

    log.info(`Request ${id} received`);

    getItemDetailUseCase
      .findById(id as string)
      .then((item) => {
        const response = mapToResponseDto(item);
        res.status(200).json(response);
        log.info(`Response to request ${id}: 200`);
        resolve(response);
      })
      .catch((e) => {
        log.error(e);
        res.status(500).json({ error: e.message });
        reject(e);
      });
  });
};

function mapToResponseDto(item: ItemDetail): ItemDetailApiResponse {
  return { ...author, item: item };
}

export default handle;
