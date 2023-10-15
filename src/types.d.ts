export type SerperClientOptions = {
  apiKey: string;
  timeout?: number;
  basePath?: string;
};

export type RequestOptions = {
  query: string;
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

export type SearchResponse = {
  searchParameters:  ResponseParameters,
  organic
};
