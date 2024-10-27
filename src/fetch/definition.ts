export interface IResponseData<T> {
  kind?: string;
  pageToken?: string;
  fields?: string;
  etag?: string;
  id?: string;
  lang?: string;
  updated?: string;
  deleted?: boolean;
  currentItemCount?: number;
  itemsPerPage?: number;
  startIndex?: number;
  totalItems?: number;
  pageIndex?: number;
  totalPages?: number;
  items?: Array<T>;
  item?: T;
  envKey?: string;
  errorOn?: Array<string>;
  waitingOn?: Array<string>;
  successOn?: Array<string>;
}
