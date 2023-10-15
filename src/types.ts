export type SerperClientOptions = {
  apiKey: string;
  timeout?: number;
  basePath?: string;
};

export type RequestOptions = {
  q: string;
  country?: string;
  locale?: string;
  autocorrect?: boolean;
  page?: number;
};
export type NumRequestOptions = RequestOptions & { num?: number };

export type SearchRequestOptions = NumRequestOptions;
export type NewsRequestOptions = NumRequestOptions;
export type ImagesRequestOptions = RequestOptions;
export type VideosRequestOptions = RequestOptions;
export type PlacesRequestOptions = RequestOptions;

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

export type SearchResponse = {
  searchParameters: ResponseParameters<"search">;
  knowledgeGraph?: KnowledgeGraph;
  organic: OrganicSearchResult[];
  peopleAlsoAsk: PeopleAlsoAsk[];
  relatedSearches: { query: string }[];
};

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

export type ImagesResponse = {
  searchParameters: ResponseParameters<"images">;
  images: Image[];
};

export type Video = {
  title: string;
  link: string;
  snippet: string;
  date?: string;
  imageUrl: string;
  position: number;
};

export type VideosResponse = {
  searchParameters: ResponseParameters<"videos">;
  videos: Video[];
};

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

export type PlacesResponse = {
  searchParameters: ResponseParameters<"places">;
  places: Place[];
};

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
