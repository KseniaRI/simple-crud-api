import { users } from "../utils.js";
import { sendResponse } from "../helpers/sendResponse.js";
import { parseUserId } from "../helpers/parseUserId.js";
import { validateUserId } from "../helpers/validateUserId.js";
export const updateUser = async (req, res) => {
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
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updateUser = JSON.parse(body);
            if (!updateUser.userName || !updateUser.age || !updateUser.hobbies) {
                sendResponse(res, "error", 404, "Username, age and hobbies are required");
            }
            else {
                const userIndex = users.findIndex(user => user.id === userId);
                const updatedUser = {
                    ...user,
                    userName: updateUser.userName,
                    age: updateUser.age,
                    hobbies: updateUser.hobbies,
                };
                users[userIndex] = updatedUser;
                sendResponse(res, "success", 200, "User was updated", updatedUser);
            }
        });
    }
};
//# sourceMappingURL=updateUser.js.map