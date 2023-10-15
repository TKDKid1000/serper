import { MissingApiKeyError } from "./errors";
import type {
  ImagesRequestOptions,
  ImagesResponse,
  NewsRequestOptions,
  NewsResponse,
  NumRequestOptions,
  PlacesRequestOptions,
  PlacesResponse,
  RequestOptions,
  SearchRequestOptions,
  SearchResponse,
  SerperClientOptions,
  SerperResponse,
  VideosRequestOptions,
  VideosResponse
} from "./types";

export class Serper {
  private apiKey: string;
  private timeout: number;
  private basePath: string;

  constructor({ apiKey, timeout, basePath }: SerperClientOptions) {
    this.apiKey = apiKey;
    this.timeout = timeout || 10000;
    this.basePath = basePath || "https://google.serper.dev";
  }

  private async request(
    query: string | RequestOptions | NumRequestOptions,
    path: string
  ): Promise<SerperResponse> {
    if (!this.apiKey) throw new MissingApiKeyError();
    if (typeof query === "string") {
      return this.request(
        {
          q: query
        },
        path
      );
    }
    return fetch(`${this.basePath}/${path}`, {
      method: "POST",
      headers: {
        "x-api-key": this.apiKey,
        "content-type": "application/json"
      },
      body: JSON.stringify(query),
      signal: AbortSignal.timeout(this.timeout)
    }).then((res) => res.json());
  }

  public search(query: string | SearchRequestOptions): Promise<SearchResponse> {
    return this.request(query, "search") as Promise<SearchResponse>;
  }
  public news(query: string | NewsRequestOptions): Promise<NewsResponse> {
    return this.request(query, "news") as Promise<NewsResponse>;
  }
  public images(query: string | ImagesRequestOptions): Promise<ImagesResponse> {
    return this.request(query, "images") as Promise<ImagesResponse>;
  }
  public videos(query: string | VideosRequestOptions): Promise<VideosResponse> {
    return this.request(query, "videos") as Promise<VideosResponse>;
  }
  public places(query: string | PlacesRequestOptions): Promise<PlacesResponse> {
    return this.request(query, "places") as Promise<PlacesResponse>;
  }
}
