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

export const TreeQLiteRequest = intersection([
  strict({
    query: string,
  }),
  exact(
    partial({
      params: array(SQLiteParam),
    })
  ),
]);
