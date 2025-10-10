"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genKey = genKey;
exports.genIv = genIv;
const pbkdf2_1 = __importDefault(require("pbkdf2"));
const crypto_1 = __importDefault(require("crypto"));
function genKey() {
    const password = "'JO!pN(N8+KH1#'c^3=8F~U[aO-}QUJx6b#'3'.'XlWRQ)L8n;";
    const salt = 'FMXcHadURYjG61xtaMz5wHR';
    const key = pbkdf2_1.default.pbkdf2Sync(password, salt, 1, 32, 'sha512');
    console.log('Key:\n', key.toString('hex'));
    return key;
}
function genIv() {
    const iv = crypto_1.default.randomBytes(16);
    console.log('Iv:\n', iv.toString('hex'));
    return iv;
}
// Run directly if executed via CLI
if (require.main === module) {
    genKey();
    genIv();
}
