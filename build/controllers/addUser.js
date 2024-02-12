import { v4 as uuidv4 } from 'uuid';
import { users } from "../utils.js";
import { sendResponse } from "../helpers/sendResponse.js";
export const addUser = async (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        if (!newUser.userName || !newUser.age || !newUser.hobbies) {
            sendResponse(res, "error", 400, 'Username, age and hobbies are required');
        }
        else {
            const user = {
                id: uuidv4(),
                userName: newUser.userName,
                age: newUser.age,
                hobbies: newUser.hobbies,
            };
            users.push(user);
            sendResponse(res, "success", 201, "User was created", user);
        }
    });
};
//# sourceMappingURL=addUser.js.map