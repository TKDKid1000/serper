/**
 * Options for initializing a Serper Client.
 * @property apiKey - The Serper API key.
 * @property timeout - Request timeout in milliseconds. Defaults to true.
 * @property basePath - Different Serper API root, if needed. Defaults to production Serper path.
 * @property cache - Enable cache if true. Defaults to true.
 */
export interface SerperClientOptions {
  apiKey: string;
  timeout?: number;
  basePath?: string;
  cache?: boolean;
}

export interface Paginate<T> {
  /**
   * Paginate to the next page, does not replace the object.
   * @returns The next page of search results.
   */
  nextPage(): Promise<T & Paginate<T>>;
  /**
   * Paginate to the previous page, does not replace the object.
   * @returns The previous page of search results.
   */
  prevPage(): Promise<T & Paginate<T>>;
  /**
   * Paginate to a specific page, does not replace the object.
   * @param page The page to navigate to. Must be an integer greater than 0.
   * @returns The specified page of search results.
   */
  toPage(page: number): Promise<T & Paginate<T>>;
}

/**
 * Options for making an arbitrary result length search request. Used for images, videos, and places.
 *
 * For search and news, use {@link NumRequestOptions}.
 *
 * @property q - The search query.
 * @property country - Optional country code.
 * @property locale - Optional locale for language or region.
 * @property autocorrect - Enable autocorrection if true.
 * @property page - Page number for paginated results.
 */
export interface RequestOptions {
  q: string;
  country?: string;
  locale?: string;
  autocorrect?: boolean;
  page?: number;
}

/**
 * Options for making a fixed result length search request. Used for search and news.
 *
 * For images, videos, and places, use {@link RequestOptions}.
 *
 * @property num - Number of results to return.
 */
export interface NumRequestOptions extends RequestOptions {
  num?: number;
}

export type ResponseParameters<T extends string> = {
  q: string;
  gl: string;
  hl: string;
  num?: number;
  autocorrect: boolean;
  page: number;
  type: T;
  engine: string;
};

export type KnowledgeGraph = {
  title: string;
  type: string;
  website: string;
  imageUrl: string;
  description: string;
  descriptionSource: string;
  descriptionLink: string;
  attributes: Record<string, string>;
};

export type OrganicSearchResult = {
  title: string;
  link: string;
  snippet: string;
  date?: string;
  attributes?: Record<string, string>;
  sitelinks?: [{ title: string; link: string }];
  position: number;
};

export type PeopleAlsoAsk = {
  question: string;
  snippet: string;
  title: string;
  link: string;
};

export interface SearchResponse {
  searchParameters: ResponseParameters<"search">;
  knowledgeGraph?: KnowledgeGraph;
  organic: OrganicSearchResult[];
  peopleAlsoAsk: PeopleAlsoAsk[];
  relatedSearches: { query: string }[];
}

export type Image = {
  title: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  thumbnailUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  source: string;
  domain: string;
  link: string;
  googleUrl: string;
  position: number;
};

export interface ImagesResponse {
  searchParameters: ResponseParameters<"images">;
  images: Image[];
}

export type Video = {
  title: string;
  link: string;
  snippet: string;
  date?: string;
  imageUrl: string;
  position: number;
};

export interface VideosResponse {
  searchParameters: ResponseParameters<"videos">;
  videos: Video[];
}

export type Place = {
  position: number;
  title: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  ratingCount: number;
  category: string;
  phoneNumber?: string;
  website?: string;
  cid: string;
};

export interface PlacesResponse {
  searchParameters: ResponseParameters<"places">;
  places: Place[];
}

export type News = {
  title: string;
  link: string;
  snippet: string;
  date: string;
  source: string;
  imageUrl?: string;
  position: number;
};

export type NewsResponse = {
  searchParameters: ResponseParameters<"news">;
  news: News[];
};

export type SerperResponse =
  | SearchResponse
  | ImagesResponse
  | VideosResponse
  | PlacesResponse
  | NewsResponse;
