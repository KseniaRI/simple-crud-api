import { users } from "../utils.js";
import { sendResponse } from "../helpers/sendResponse.js";
import { parseUserId } from "../helpers/parseUserId.js";
import { validateUserId } from "../helpers/validateUserId.js";
export const getUser = async (req, res) => {
    const userId = parseUserId(req);
    if (userId) {
        const isValidId = validateUserId(userId);
        if (!isValidId) {
            sendResponse(res, "error", 400, "Invalid userId format");
            return;
        }
    }
    const user = users.find(user => user.id === userId);
    if (!user) {
        sendResponse(res, "error", 404, "User not found");
    }
    else {
        sendResponse(res, "success", 200, "User was found", `id === ${userId}`);
    }
};
//# sourceMappingURL=getUser.js.map