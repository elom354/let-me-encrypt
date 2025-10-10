import aesjs from "aes-js";

/**
 * Encrypts a UTF-8 string using AES-CBC mode.
 * @param key AES key (Buffer)
 * @param iv Initialization vector (Buffer)
 * @param data Plain text to encrypt
 * @returns The encrypted data in hexadecimal format
 */
function encrypt(key: Buffer, iv: Buffer, data: string): string {
  // Encode to base64 (to handle accented characters)
  let base64Data = Buffer.from(data, "utf8").toString("base64");

  // Add padding using "#" to reach 16-byte blocks
  const length = base64Data.length;
  base64Data += "#".repeat((16 - (length % 16)) % 16);

  const dataBytes = aesjs.utils.utf8.toBytes(base64Data);

  const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
  const encryptedBytes = aesCbc.encrypt(dataBytes);

  return aesjs.utils.hex.fromBytes(encryptedBytes);
}

/**
 * Decrypts AES-CBC encrypted data (hex format)
 * @param key AES key (Buffer)
 * @param iv Initialization vector (Buffer)
 * @param encrypted The encrypted hex string
 * @returns Object containing decrypted text and its byte representation
 */
function decrypt(
  key: Buffer,
  iv: Buffer,
  encrypted: string,
): { text: string; byte: Uint8Array } {
  const encryptedBytes = aesjs.utils.hex.toBytes(encrypted);
  const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
  const decryptedBytes = aesCbc.decrypt(encryptedBytes);

  let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

  // Remove "#" padding
  const arr = decryptedText.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "#") arr[i] = "";
    else break;
  }

  decryptedText = arr.join("");

  // Decode base64
  const plainText = Buffer.from(decryptedText, "base64").toString("utf8");
  const plainBytes = aesjs.utils.utf8.toBytes(plainText);

  return { text: plainText, byte: plainBytes };
}

/**
 * Factory to create a crypto instance (AES-CBC)
 * @param key AES key
 * @param iv Initialization vector
 */
export function crypto(key: Buffer, iv: Buffer) {
  return {
    encrypt: (plain: string) => encrypt(key, iv, plain),
    decrypt: (encrypted: string) => decrypt(key, iv, encrypted),
  };
}
