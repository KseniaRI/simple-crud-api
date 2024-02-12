import { IncomingMessage, ServerResponse } from "http";
import { users } from "../utils.ts";
import { IUser } from "../models/userModel.ts";
import { sendResponse } from "../helpers/sendResponse.ts";
import { parseUserId } from "../helpers/parseUserId.ts";
import { validateUserId } from "../helpers/validateUserId.ts";

export const updateUser = async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    const userId = parseUserId(req);

    if (userId) {
        validateUserId(userId, res);
    }

    const user = users.find(user => user.id === userId);
  
    if (!user) {
        sendResponse(res, "error", 404, "User not found");
    } else {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const updateUser: Partial<IUser> = JSON.parse(body);
            if (!updateUser.userName || !updateUser.age || !updateUser.hobbies) {
                sendResponse(res, "error", 404, "Username, age and hobbies are required");
            } else {
                const userIndex = users.findIndex(user => user.id === userId);
                const updatedUser: IUser = {
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
}