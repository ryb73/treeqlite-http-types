import type { TypeOf } from "io-ts";
import {
  array,
  exact,
  intersection,
  number,
  partial,
  strict,
  string,
  union,
} from "io-ts";

const SQLiteParam = union([number, string]);

const TreeQLiteRequest = intersection([
  strict({
    query: string,
  }),
  exact(
    partial({
      params: array(SQLiteParam),
    })
  ),
]);
type TreeQLiteRequest = TypeOf<typeof TreeQLiteRequest>;
export { TreeQLiteRequest };
