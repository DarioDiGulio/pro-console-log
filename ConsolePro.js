"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolePro = void 0;
var Utils_1 = require("./Utils");
var fs = require("fs");
var ConsolePro = /** @class */ (function () {
    function ConsolePro(file) {
        file ? this.filePath = file : this.filePath = '';
    }
    ConsolePro.prototype.log = function (message, status) {
        if (status === void 0) { status = ''; }
        var messageToLog = this.createLog(message, status);
        if (this.filePath) {
            this.writeLog(messageToLog);
        }
        else {
            this.consoleLog(messageToLog);
        }
    };
    ConsolePro.log = function (message, status) {
        if (status === void 0) { status = ''; }
        var messageToLog = ConsolePro.createLog(message, status);
        ConsolePro.consoleLog(messageToLog);
    };
    ConsolePro.createLog = function (userMessage, status) {
        var messageLog = '';
        var date = Utils_1.Utils.getNow();
        status = status.toLowerCase();
        messageLog = ConsolePro.createConsoleLog(date, userMessage, status);
        return messageLog;
    };
    ConsolePro.prototype.createLog = function (userMessage, status) {
        var messageLog = '';
        var date = Utils_1.Utils.getNow();
        status = status.toLowerCase();
        if (this.filePath) {
            messageLog = this.createPlainTextLog(date, userMessage, status);
        }
        else {
            messageLog = this.createConsoleLog(date, userMessage, status);
        }
        return messageLog;
    };
    ConsolePro.prototype.createConsoleLog = function (date, userMessage, status) {
        var messageConsoleToLog = '';
        var endMessage = " - " + userMessage + " \u001B[0m";
        if (status === 'w') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[33m[WARNING]\u001B[0m" + endMessage;
        }
        else if (status === 's') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[32m[SUCCESS]\u001B[0m" + endMessage;
        }
        else if (status === 'e') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[31m[ERROR]\u001B[0m" + endMessage;
        }
        else if (status === 'i') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[34m[INFO]\u001B[0m" + endMessage;
        }
        else if (status == 'd') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[35m[DEBUG]\u001B[0m" + endMessage;
        }
        else {
            messageConsoleToLog = "\u001B[0m" + date + " [LOG]" + endMessage;
        }
        return messageConsoleToLog;
    };
    ConsolePro.createConsoleLog = function (date, userMessage, status) {
        var messageConsoleToLog = '';
        var endMessage = " - " + userMessage + " \u001B[0m";
        if (status === 'w') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[33m[WARNING]\u001B[0m" + endMessage;
        }
        else if (status === 's') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[32m[SUCCESS]\u001B[0m" + endMessage;
        }
        else if (status === 'e') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[31m[ERROR]\u001B[0m" + endMessage;
        }
        else if (status === 'i') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[34m[INFO]\u001B[0m" + endMessage;
        }
        else if (status == 'd') {
            messageConsoleToLog = "\u001B[0m" + date + " \u001B[35m[DEBUG]\u001B[0m" + endMessage;
        }
        else {
            messageConsoleToLog = "\u001B[0m" + date + " [LOG]" + endMessage;
        }
        return messageConsoleToLog;
    };
    ConsolePro.prototype.createPlainTextLog = function (date, userMessage, status) {
        var messageTextPlainToLog = '';
        var endMessage = " - " + userMessage;
        if (status === 'w') {
            messageTextPlainToLog = date + " [WARNING]" + endMessage;
        }
        else if (status === 's') {
            messageTextPlainToLog = date + " [SUCCESS]" + endMessage;
        }
        else if (status === 'e') {
            messageTextPlainToLog = date + " [ERROR]" + endMessage;
        }
        else if (status === 'i') {
            messageTextPlainToLog = date + " [INFO]" + endMessage;
        }
        else if (status == 'd') {
            messageTextPlainToLog = date + " [DEBUG]" + endMessage;
        }
        else {
            messageTextPlainToLog = date + " [LOG]" + endMessage.replace('-', '');
        }
        return messageTextPlainToLog;
    };
    ConsolePro.prototype.writeLog = function (messageToLog) {
        fs.appendFileSync(this.filePath, messageToLog + "\n", 'ascii');
    };
    ConsolePro.prototype.consoleLog = function (messageToLog) {
        console.log(messageToLog);
    };
    ConsolePro.consoleLog = function (messageToLog) {
        console.log(messageToLog);
    };
    return ConsolePro;
}());
exports.ConsolePro = ConsolePro;
//# sourceMappingURL=ConsolePro.js.map