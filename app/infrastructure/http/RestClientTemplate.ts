import axios, { AxiosInstance, AxiosResponse } from "axios";

export abstract class RestClientTemplate {
  private readonly restClient: AxiosInstance;

  protected constructor(baseUrl: string) {
    this.restClient = axios.create({ baseURL: baseUrl });
  }

  async get<T>(endpoint: string, queryParams?: unknown): Promise<T> {
    const response: AxiosResponse<T> = await this.restClient.get(endpoint, {
      params: queryParams,
    });
    return response.data;
  }
}
