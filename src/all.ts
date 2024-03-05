import type { TypeOf } from "io-ts";
import { array, unknown } from "io-ts";
import { TreeQLiteRequest } from "./TreeQLiteRequest";

const RequestBody = TreeQLiteRequest;
type RequestBody = TypeOf<typeof RequestBody>;
export { RequestBody };

const ResponseBody = array(unknown);
type ResponseBody = TypeOf<typeof ResponseBody>;
export { ResponseBody };
