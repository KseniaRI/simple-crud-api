import { IncomingMessage, ServerResponse } from "http";
import { users } from "../utils.ts";
import { sendResponse } from "../helpers/sendResponse.ts";

export const getAllUsers = async (req: IncomingMessage, res:  ServerResponse<IncomingMessage>) => {
   sendResponse(res, "success", 200, "Users", users);
}