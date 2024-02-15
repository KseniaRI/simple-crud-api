export const sendResponse = (res, status, code, message, response) => {
    res.end(JSON.stringify({
        status,
        code,
        message,
        response
    }));
};
//# sourceMappingURL=sendResponse.js.map