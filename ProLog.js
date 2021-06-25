const fs = require('fs');
const {
    setUpMessage,
    createMessage,
    createLog,
    consoleLog,
} = require('./Helper')

class ProLog {
    #filePath;
    #messageConsoleToLog;

    /**
     * @param {string} filePath
     * @returns {ProLog} ProLog instance
     */
    constructor(filePath = '') {
        filePath ? this.#filePath = filePath : this.#filePath = '';
    }

    /**
     * @param {string} message Any text
     * @param {string} status [s, w, e, i, d]
     * @return void If has instance of file, log in file, else log in console.
     */
    log(message, status = '') {
        let messageToLog = this.#createLog(message, status);
        this.#filePath ? this.#writeLog(messageToLog) : consoleLog(messageToLog);
    }

    /**
     * @param {string} message Any text
     * @param {string} status [s, w, e, i, d]
     * @return void If has instance of file, log in file, else log in console.
     */
    static log(message, status = '') {
        let messageToLog = createLog(message, status);
        consoleLog(messageToLog);
    }

    static success(message) {
        ProLog.log(message, 's');
    }

    static warning(message) {
        ProLog.log(message, 'w');
    }

    static error(message) {
        ProLog.log(message, 'e');
    }

    static debug(message) {
        ProLog.log(message, 'd');
    }

    success(message) {
        this.log(message, 's');
    }

    warning(message) {
        this.log(message, 'w');
    }

    error(message) {
        this.log(message, 'e');
    }

    debug(message) {
        this.log(message, 'd');
    }

    #createLog(userMessage, status) {
        let messageLog;
        const {date, statusLower} = setUpMessage(status);
        if (this.#filePath) {
            messageLog = ProLog.#createPlainTextLog(date, userMessage, statusLower);
        } else {
            messageLog = this.#createConsoleLog(date, userMessage, statusLower);
        }
        return messageLog;
    }

    #createConsoleLog(date, userMessage, status) {
        const {statusMessage, endMessage, dateMessage} = createMessage(date, userMessage);
        status ?
            this.#messageConsoleToLog = dateMessage + ' ' + statusMessage[status] + endMessage
            : this.#messageConsoleToLog = `${dateMessage} [LOG]${endMessage}`;
        return this.#messageConsoleToLog;
    }

    static #createPlainTextLog(date, userMessage, status) {
        let {endMessage, statusMessage} = ProLog.#setUpPlanMessage(userMessage);
        let messageTextPlainToLog;
        status ?
            messageTextPlainToLog = date + ' ' + statusMessage[status] + endMessage
            : messageTextPlainToLog = `${date} [LOG]${endMessage}`;
        return messageTextPlainToLog;
    }

    static #setUpPlanMessage(userMessage) {
        const endMessage = ` - ${userMessage}`;
        const statusMessage = {
            'w': '[WARNING]',
            's': '[SUCCESS]',
            'e': '[ERROR]',
            'i': '[INFO]',
            'd': '[DEBUG]'
        };
        return {endMessage, statusMessage};
    }

    #writeLog(messageToLog) {
        fs.appendFileSync(this.#filePath, `${messageToLog}\n`);
    }

}

module.exports = ProLog;
