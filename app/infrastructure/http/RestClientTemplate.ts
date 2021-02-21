import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Log } from "@config/LoggerConfig";

export abstract class RestClientTemplate {
  private readonly restClient: AxiosInstance;
  private readonly log: Log;
  private readonly baseUrl: string;

  protected constructor(baseUrl: string, log: Log) {
    this.baseUrl = baseUrl;
    this.restClient = axios.create({ baseURL: baseUrl, timeout: 5000 });
    this.log = log;
  }

  async get<T>(endpoint: string, queryParams?: unknown): Promise<T> {
    this.log.debug(
      `Calling endpoint ${
        this.baseUrl
      }${endpoint} with queryParams ${JSON.stringify(queryParams)}`
    );

    const response: AxiosResponse<T> = await this.restClient.get(endpoint, {
      params: queryParams,
    });
    const config = response.config;
    this.log.debug(`Result of ${config.url}: ${response.status}`);
    return response.data;
  }
}
