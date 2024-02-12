import { IncomingMessage, ServerResponse } from "http";

export const sendResponse = (res: ServerResponse<IncomingMessage>, status: string, code: number, message: string, response?: any) => {
    res.end(JSON.stringify({
        status,
        code,
        message,
        response
    }));
}