import { IncomingMessage, ServerResponse } from "http";
import { users } from "../utils.ts";
import { sendResponse } from "../helpers/sendResponse.ts";
import { parseUserId } from "../helpers/parseUserId.ts";
import { validateUserId } from "../helpers/validateUserId.ts";

export const getUser = async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    const userId = parseUserId(req);

    if (userId) {
        validateUserId(userId, res);
    }
    const user = users.find(user => user.id === userId);

    if (!user) {
        sendResponse(res, "error", 404, "User not found");
    } else {
        sendResponse(res, "success", 200, "User was found", `id === ${userId}`);
    } 
}