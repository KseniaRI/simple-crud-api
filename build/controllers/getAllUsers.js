import { users } from "../utils.js";
import { sendResponse } from "../helpers/sendResponse.js";
export const getAllUsers = async (req, res) => {
    sendResponse(res, "success", 200, "Users", users);
};
//# sourceMappingURL=getAllUsers.js.map