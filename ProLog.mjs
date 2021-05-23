import fs from 'fs';

const getNow = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

export class ProLog {
    filePath;
    messageConsoleToLog;

    /**
     * @param {string} filePath
     * @returns {ConsolePro} ConsolePro instance
     */
    constructor(filePath = '') {
        filePath ? this.filePath = filePath : this.filePath = '';
    }

    /**
     * @param {string} message Any text
     * @param {string} status [s, w, e, i, d]
     * @return void If has instance of file, log in file, else log in console.
     */
    log(message, status = '') {
        let messageToLog = this.createLog(message, status);
        if (this.filePath) {
            this.writeLog(messageToLog);
        } else {
            this.consoleLog(messageToLog);
        }
    }

    /**
     * @param {string} message Any text
     * @param {string} status [s, w, e, i, d]
     * @return void If has instance of file, log in file, else log in console.
     */
    static log(message, status = '') {
        let messageToLog = ProLog.createLog(message, status);
        ProLog.consoleLog(messageToLog);
    }

    createLog(userMessage, status) {
        let messageLog = '';
        const date = getNow();
        status = status.toLowerCase();
        if (this.filePath) {
            messageLog = this.createPlainTextLog(date, userMessage, status);
        } else {
            messageLog = this.createConsoleLog(date, userMessage, status);
        }
        return messageLog;
    }

    static createLog(userMessage, status) {
        let messageLog = '';
        const date = getNow();
        status = status.toLowerCase();
        messageLog = ProLog.createConsoleLog(date, userMessage, status);
        return messageLog;
    }

    createConsoleLog(date, userMessage, status) {
        const endMessage = ` - ${userMessage} \u001b[0m`;
        if (status === 'w') {
            this.messageConsoleToLog = `\u001b[0m${date} \u001b[33m[WARNING]\u001b[0m${endMessage}`;
        } else if (status === 's') {
            this.messageConsoleToLog = `\u001b[0m${date} \u001b[32m[SUCCESS]\u001b[0m${endMessage}`;
        } else if (status === 'e') {
            this.messageConsoleToLog = `\u001b[0m${date} \u001b[31m[ERROR]\u001b[0m${endMessage}`;
        } else if (status === 'i') {
            this.messageConsoleToLog = `\u001b[0m${date} \u001b[34m[INFO]\u001b[0m${endMessage}`;
        } else if (status === 'd') {
            this.messageConsoleToLog = `\u001b[0m${date} \u001b[35m[DEBUG]\u001b[0m${endMessage}`;
        } else {
            this.messageConsoleToLog = `\u001b[0m${date} [LOG]${endMessage}`;
        }
        return this.messageConsoleToLog;
    }

    static createConsoleLog(date, userMessage, status) {
        let messageConsoleToLog = '';
        const endMessage = ` - ${userMessage} \u001b[0m`;
        if (status === 'w') {
            messageConsoleToLog = `\u001b[0m${date} \u001b[33m[WARNING]\u001b[0m${endMessage}`;
        } else if (status === 's') {
            messageConsoleToLog = `\u001b[0m${date} \u001b[32m[SUCCESS]\u001b[0m${endMessage}`;
        } else if (status === 'e') {
            messageConsoleToLog = `\u001b[0m${date} \u001b[31m[ERROR]\u001b[0m${endMessage}`;
        } else if (status === 'i') {
            messageConsoleToLog = `\u001b[0m${date} \u001b[34m[INFO]\u001b[0m${endMessage}`;
        } else if (status === 'd') {
            messageConsoleToLog = `\u001b[0m${date} \u001b[35m[DEBUG]\u001b[0m${endMessage}`;
        } else {
            messageConsoleToLog = `\u001b[0m${date} [LOG]${endMessage}`;
        }
        return messageConsoleToLog;
    }

    createPlainTextLog(date, userMessage, status) {
        let messageTextPlainToLog = '';
        const endMessage = ` - ${userMessage}`;
        if (status === 'w') {
            messageTextPlainToLog = `${date} [WARNING]${endMessage}`;
        } else if (status === 's') {
            messageTextPlainToLog = `${date} [SUCCESS]${endMessage}`;
        } else if (status === 'e') {
            messageTextPlainToLog = `${date} [ERROR]${endMessage}`;
        } else if (status === 'i') {
            messageTextPlainToLog = `${date} [INFO]${endMessage}`;
        } else if (status == 'd') {
            messageTextPlainToLog = `${date} [DEBUG]${endMessage}`;
        } else {
            messageTextPlainToLog = date + " [LOG]" + endMessage.replace('-', '');
        }

        return messageTextPlainToLog;
    }

    writeLog(messageToLog) {
        fs.appendFileSync(this.filePath, `${messageToLog}\n`);
    }

    consoleLog(messageToLog) {
        console.log(messageToLog);
    }

    static consoleLog(messageToLog) {
        console.log(messageToLog);
    }

}
