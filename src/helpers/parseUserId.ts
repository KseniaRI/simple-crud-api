import { IncomingMessage } from "http";
import { parse } from "url";

export const parseUserId = (req: IncomingMessage) => {
    const reqUrl = parse(req.url!, true);
    const { pathname } = reqUrl;
    const userId = pathname?.split('/')[3];
    
    return userId;
}