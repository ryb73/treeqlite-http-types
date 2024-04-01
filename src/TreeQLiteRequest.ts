import type { TypeOf } from "io-ts";
import {
  array,
  exact,
  intersection,
  nullType,
  number,
  partial,
  strict,
  string,
  union,
} from "io-ts";

const SQLiteParam = union([nullType, number, string]);

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
