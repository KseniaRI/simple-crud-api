import { IncomingMessage, ServerResponse } from "http";
import { users } from "../utils.js";
import { sendResponse } from "../helpers/sendResponse.js";

export const getAllUsers = async (req: IncomingMessage, res:  ServerResponse<IncomingMessage>) => {
   sendResponse(res, "success", 200, "Users", users);
}