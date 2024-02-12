import { IncomingMessage, ServerResponse } from "http";
import { users } from "../utils.ts";
import { sendResponse } from "../helpers/sendResponse.ts";
import { parseUserId } from "../helpers/parseUserId.ts";
import { validateUserId } from "../helpers/validateUserId.ts";

export const deleteUser = async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    const userId = parseUserId(req);

    if (userId) {
        validateUserId(userId, res);
    }

    const user = users.find(user => user.id === userId);
    
    if (!user) {
        sendResponse(res, "error", 404, "User not found");
    } else {
        const userIndex = users.findIndex(user => user.id === userId);
        users.splice(userIndex, 1);
        res.writeHead(204, { 'Content-Type': 'application/json' });
        res.end();
    }
}