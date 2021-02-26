import axios, { AxiosResponse } from "axios";
import { RestClientTemplate } from "../RestClientTemplate";
import { buildLogger, Log } from "../../config/LoggerConfig";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const BASE_URL = "http://localhost:3000/api";

type ReturnType = {
  val1: string;
  val2: string;
};

describe("Test get function", function () {
  let restClientTemplate: RestClientTemplate;

  beforeEach(() => {
    mockedAxios.create.mockReturnThis();
    restClientTemplate = new TestClass(BASE_URL, buildLogger("test class"));
  });

  afterEach(() => {
    mockedAxios.get.mockClear();
  });

  test("fetch values with query params", async () => {
    // GIVEN
    const resolvedValue: AxiosResponse<ReturnType> = {
      headers: undefined,
      status: 200,
      statusText: "200",
      config: { url: BASE_URL },
      data: { val1: "val1", val2: "val2" },
    };
    mockedAxios.get.mockResolvedValue(resolvedValue);

    const endpoint = "/endpoint";
    const queryParam = { search: "searchText" };

    // WHEN
    const response = await restClientTemplate.get<ReturnType>(
      endpoint,
      queryParam
    );

    // THEN
    expect(response).toBe(resolvedValue.data);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(endpoint, {
      params: queryParam,
    });
  });

  test("fetch values without query params", async () => {
    // GIVEN
    const resolvedValue: AxiosResponse<ReturnType> = {
      headers: undefined,
      status: 200,
      statusText: "200",
      config: { url: BASE_URL },
      data: { val1: "val1", val2: "val2" },
    };
    mockedAxios.get.mockResolvedValue(resolvedValue);

    const endpoint = "/endpoint";

    // WHEN
    const response = await restClientTemplate.get<ReturnType>(endpoint);

    // THEN
    expect(response).toBe(resolvedValue.data);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(endpoint, {
      params: undefined,
    });
  });

  test("fetch values throw exception", async () => {
    // GIVEN
    const rejectedValue: Error = {
      message: "test error",
      name: "error name",
      stack: "error stack",
    };

    mockedAxios.get.mockRejectedValue(rejectedValue);

    const endpoint = "/endpoint";

    try {
      const response = await restClientTemplate.get<ReturnType>(endpoint);
      expect(response).toBeFalsy();
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toBe(rejectedValue);
    } finally {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith(endpoint, {
        params: undefined,
      });
    }
  });
});

class TestClass extends RestClientTemplate {
  constructor(baseUrl: string, log: Log) {
    super(baseUrl, log);
  }
}
