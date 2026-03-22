
export function createRandomString(length: number, text: string = "") {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomString = Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
    return text ? `${text}_${randomString}` : randomString;
}
