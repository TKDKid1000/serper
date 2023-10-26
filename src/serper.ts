import { MissingApiKeyError } from "./errors";
import type {
  ImagesResponse,
  NewsResponse,
  NumRequestOptions,
  Paginate,
  PlacesResponse,
  RequestOptions,
  SearchResponse,
  SerperClientOptions,
  SerperResponse,
  VideosResponse
} from "./types";

export class Serper {
  private apiKey: string;
  private timeout: number;
  private basePath: string;
  private doCache: boolean;
  private responseCache: Record<string, object>;

  constructor({ apiKey, timeout, basePath, cache }: SerperClientOptions) {
    this.apiKey = apiKey;
    this.timeout = timeout ?? 10000;
    this.basePath = basePath ?? "https://google.serper.dev";
    this.doCache = cache ?? true;
    this.responseCache = {};
  }

  private async request<T extends SerperResponse>(
    query: string | RequestOptions | NumRequestOptions,
    path: string
  ): Promise<T> {
    if (!this.apiKey) throw new MissingApiKeyError();
    if (typeof query === "string") {
      return this.request(
        {
          q: query
        },
        path
      );
    }

    const requestHash = JSON.stringify(
      { ...query, path },
      Object.keys({ ...query, path }).sort()
    );
    let response: T & Paginate<T>;

    if (!this.doCache || !this.responseCache[requestHash]) {
      response = await fetch(`${this.basePath}/${path}`, {
        method: "POST",
        headers: {
          "x-api-key": this.apiKey,
          "content-type": "application/json"
        },
        body: JSON.stringify(query),
        signal: AbortSignal.timeout(this.timeout)
      }).then((res) => res.json());

      this.responseCache[requestHash] = response;
    } else {
      console.log("Using cached response");
      response = this.responseCache[requestHash] as T & Paginate<T>;
    }

    // TODO: Implement response object.

    const paginate = (amount: number, replace = false) => {
      const page = replace ? amount : (query.page ?? 1) + amount;
      return this.request<T>(
        { ...query, page: page > 1 ? page : 1 },
        path
      ) as Promise<T & Paginate<T>>;
    };
    response.nextPage = () => paginate(1);
    response.prevPage = () => paginate(-1);
    response.toPage = (page) => paginate(page, true);
    return response;
  }

  public search(query: string | NumRequestOptions) {
    return this.request(query, "search") as Promise<
      SearchResponse & Paginate<SearchResponse>
    >;
  }
  public news(query: string | NumRequestOptions) {
    return this.request(query, "news") as Promise<
      NewsResponse & Paginate<NewsResponse>
    >;
  }
  public images(query: string | RequestOptions) {
    return this.request(query, "images") as Promise<
      ImagesResponse & Paginate<ImagesResponse>
    >;
  }
  public videos(query: string | RequestOptions) {
    return this.request(query, "videos") as Promise<
      VideosResponse & Paginate<VideosResponse>
    >;
  }
  public places(query: string | RequestOptions) {
    return this.request(query, "places") as Promise<
      PlacesResponse & Paginate<PlacesResponse>
    >;
  }
}
