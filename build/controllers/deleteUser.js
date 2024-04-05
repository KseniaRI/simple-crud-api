import { users } from "../utils.js";
import { sendResponse } from "../helpers/sendResponse.js";
import { parseUserId } from "../helpers/parseUserId.js";
import { validateUserId } from "../helpers/validateUserId.js";
export const deleteUser = async (req, res) => {
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
        const userIndex = users.findIndex(user => user.id === userId);
        users.splice(userIndex, 1);
        res.end();
    }
};
//# sourceMappingURL=deleteUser.js.map