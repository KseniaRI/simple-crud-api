import { IncomingMessage, ServerResponse } from "http";
import { IUser } from "../models/userModel.ts";
import { v4 as uuidv4 } from 'uuid';
import { users } from "../utils.ts";
import { sendResponse } from "../helpers/sendResponse.ts";

export const addUser = async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    
    req.on('end', () => {
      const newUser: Partial<IUser> = JSON.parse(body);
        if (!newUser.userName || !newUser.age || !newUser.hobbies) {
            sendResponse(res, "error", 400, 'Username, age and hobbies are required');  
        } else {
            const user: IUser = {
                id: uuidv4(),
                userName: newUser.userName,
                age: newUser.age,
                hobbies: newUser.hobbies,
            };
            users.push(user);
            sendResponse(res, "success", 201, "User was created", user);
        }
    });
}