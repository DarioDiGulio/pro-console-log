import {Utils} from "./Utils";
import * as fs from 'fs';

export class ConsolePro {
    private filePath;

    /**
     * @param {string} filePath
     * @returns {ConsolePro} ConsolePro instance
     */
    constructor(filePath?: string) {
        filePath ? this.filePath = filePath : this.filePath = '';
    }

    /**
     * @param {string} message Any text
     * @param {string} status [s, w, e, i, d]
     * @return void If has instance of file, log in file, else log in console.
     */
    public log(message, status = '') {
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
     * @return void Log in console.
     */
    public static log(message, status = '') {
        let messageToLog = ConsolePro.createLog(message, status);
        ConsolePro.consoleLog(messageToLog);
    }

    private static createLog(userMessage, status) {
        let messageLog = '';
        const date = Utils.getNow();
        status = status.toLowerCase();
        messageLog = ConsolePro.createConsoleLog(date, userMessage, status);
        return messageLog;
    }

    private createLog(userMessage, status) {
        let messageLog = '';
        const date = Utils.getNow();
        status = status.toLowerCase();
        if (this.filePath) {
            messageLog = this.createPlainTextLog(date, userMessage, status);
        } else {
            messageLog = this.createConsoleLog(date, userMessage, status);
        }
        return messageLog;
    }

    private createConsoleLog(date: string, userMessage, status) {
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
        } else if (status == 'd') {
            messageConsoleToLog = `\u001b[0m${date} \u001b[35m[DEBUG]\u001b[0m${endMessage}`;
        } else {
            messageConsoleToLog = `\u001b[0m${date} [LOG]${endMessage}`;
        }
        return messageConsoleToLog;
    }
    private static createConsoleLog(date: string, userMessage, status) {
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
        } else if (status == 'd') {
            messageConsoleToLog = `\u001b[0m${date} \u001b[35m[DEBUG]\u001b[0m${endMessage}`;
        } else {
            messageConsoleToLog = `\u001b[0m${date} [LOG]${endMessage}`;
        }
        return messageConsoleToLog;
    }

    private createPlainTextLog(date: string, userMessage, status) {
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

    private writeLog(messageToLog) {
        fs.appendFileSync(this.filePath, `${messageToLog}\n`, 'ascii');
    }

    private consoleLog(messageToLog) {
        console.log(messageToLog);
    }

    private static consoleLog(messageToLog) {
        console.log(messageToLog);
    }
}