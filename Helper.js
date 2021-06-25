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

const consoleLog = messageToLog => console.log(messageToLog);

const createMessage = (date, userMessage) => {
    const dateMessage = `\u001b[0m${date}`;
    const endMessage = `\u001b[0m - ${userMessage} \u001b[0m`;
    const statusMessage = {
        'w': '\u001b[33m[WARNING]',
        's': '\u001b[32m[SUCCESS]',
        'e': '\u001b[31m[ERROR]',
        'i': '\u001b[34m[INFO]',
        'd': '\u001b[35m[DEBUG]'
    };

    return {
        dateMessage, endMessage, statusMessage
    }
}

const createConsoleLog = (date, userMessage, status) => {
    let messageConsoleToLog;
    const {statusMessage, endMessage, dateMessage} = createMessage(date, userMessage);

    if (status) {
        messageConsoleToLog = dateMessage + ' ' + statusMessage[status] + endMessage;
    } else {
        messageConsoleToLog = `${dateMessage} [LOG]${endMessage}`;
    }
    return messageConsoleToLog;
}

const setUpMessage = (status) => {
    return {
        date: getNow(),
        statusLower: status.toLowerCase(),
    }
}

const createLog = (userMessage, status) => {
    const {date, statusLower} = setUpMessage(status);
    return createConsoleLog(date, userMessage, statusLower);
}

module.exports = {
    consoleLog,
    createMessage,
    setUpMessage,
    createLog,
}
