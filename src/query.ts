import type { TypeOf } from "io-ts";
import { bigint, number, strict, union } from "io-ts";
import { TreeQLiteRequest } from "./TreeQLiteRequest.js";

const RequestBody = TreeQLiteRequest;
type RequestBody = TypeOf<typeof RequestBody>;
export { RequestBody };

const QueryResult = strict({
  changes: number,
  lastInsertRowid: union([bigint, number]),
});

const ResponseBody = QueryResult;
type ResponseBody = TypeOf<typeof ResponseBody>;
export { ResponseBody };
