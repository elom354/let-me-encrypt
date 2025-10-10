import pbkdf2 from "pbkdf2";
import crypto from "crypto";

export function genKey(): Buffer {
  const password = "'JO!pN(N8+KH1#'c^3=8F~U[aO-}QUJx6b#'3'.'XlWRQ)L8n;";
  const salt = "FMXcHadURYjG61xtaMz5wHR";
  const key = pbkdf2.pbkdf2Sync(password, salt, 1, 32, "sha512");
  console.log("Key:\n", key.toString("hex"));
  return key;
}

export function genIv(): Buffer {
  const iv = crypto.randomBytes(16);
  console.log("Iv:\n", iv.toString("hex"));
  return iv;
}

// Run directly if executed via CLI
if (require.main === module) {
  genKey();
  genIv();
}
