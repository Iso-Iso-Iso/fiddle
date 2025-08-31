import sha256 from "crypto-js/sha256";

export const encryptPassword = async (password) => sha256(password).toString();
