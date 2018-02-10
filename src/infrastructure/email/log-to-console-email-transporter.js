export const logToConsoleEmailTransporter = {
    sendMail(option) {
        return Promise.resolve(console.log(option));
    }
};