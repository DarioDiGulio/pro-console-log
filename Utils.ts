export class Utils {

    public static getNow() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    }

}