import type { TypeOf } from "io-ts";
import { array, bigint, literal, number, strict, union, unknown } from "io-ts";
import { TreeQLiteRequest } from "./TreeQLiteRequest";

const RequestBody = TreeQLiteRequest;
type RequestBody = TypeOf<typeof RequestBody>;
export { RequestBody };

const AllResult = array(unknown);

const QueryResult = strict({
  changes: number,
  lastInsertRowid: union([bigint, number]),
});

const ResponseBody = union([
  strict({
    type: literal(`noData`),
    result: QueryResult,
  }),
  strict({
    type: literal(`returnedData`),
    data: AllResult,
  }),
]);
type ResponseBody = TypeOf<typeof ResponseBody>;
export { ResponseBody };
