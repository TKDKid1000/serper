import { NumRequestOptions, RequestOptions, SearchRequestOptions, SerperClientOptions } from "./types";

const defaultRequestOptions: RequestOptions = {
  query: "",
  country: "us",
  locale: "en",
  autocorrect: true,
  page: 1
};

const defaultNumRequestOptions: NumRequestOptions = {
  query: "",
  country: "us",
  locale: "en",
  autocorrect: true,
  page: 1,
  num: 10
};

export class Serper {
  private apiKey: string;
  private timeout: number;
  private basePath: string;

  constructor({ apiKey, timeout, basePath }: SerperClientOptions) {
    this.apiKey = apiKey;
    this.timeout = timeout || 10000;
    this.basePath = basePath || "https://google.serper.dev";
  }

  private async request(body: BodyInit) {
    return fetch(`${this.basePath}/search`, {
      method: "POST",
      headers: {
        "x-api-key": this.apiKey,
        "content-type": "application/json"
      },
      body,
      signal: AbortSignal.timeout(this.timeout)
    });
  }

  public async search(query: string | SearchRequestOptions) {
    if (typeof query === "string") {
      return this.search({
        query
      });
    }
    return this.request(JSON.stringify(query));
  }
  public async news() {}
  public async images() {}
  public async videos() {}
  public async places() {}
}
