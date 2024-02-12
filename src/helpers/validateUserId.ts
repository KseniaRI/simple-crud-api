import { IncomingMessage, ServerResponse } from "http";
import { sendResponse } from "./sendResponse.ts";

export const validateUserId = (userId: string, res: ServerResponse<IncomingMessage>) => {
    if (!userId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)) {
        sendResponse(res, "error", 400, "Invalid userId format");
        return; 
    }
}