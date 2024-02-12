import { createServer } from "http";
import { parse } from "url";
import { getAllUsers } from "./controllers/getAllUsers.ts";
import { addUser } from "./controllers/addUser.ts";
import { getUser } from "./controllers/getUser.ts";
import { deleteUser } from "./controllers/deleteUser.ts";
import { updateUser } from "./controllers/updateUser.ts";
import { sendResponse } from "./helpers/sendResponse.ts";

const server = createServer(async (req, res) => {
    try {
        const reqUrl = parse(req.url!, true);
        const { pathname } = reqUrl;
        
        if (pathname === '/api/users') {
            if (req.method === "GET") {
                getAllUsers(req, res);
            } else if (req.method === 'POST') {
                await addUser(req, res);
            }
        } else if (pathname?.startsWith('/api/users')){
            if (req.method === "GET") { 
                await getUser(req, res);
            } else if (req.method === "DELETE") {
                await deleteUser(req, res);
            } else if (req.method === "PUT") {
                await updateUser(req, res);
            }
        } else {
            sendResponse(res,"error", 404, "Non-existent address")
        }
    } catch (error) {
        sendResponse(res, "error", 500, "Internal server error");
    }
    
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

