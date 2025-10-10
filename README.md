# 🔐 let-me-encrypt-ts

A simple, modern, and type-safe AES encryption/decryption utility for Node.js and TypeScript.

> Inspired by `@digitaltg/cipher-cb`, rewritten with TypeScript and enhanced API clarity.

---

## 🚀 Features

- AES-256-CBC encryption & decryption  
- Works with hex keys and IVs  
- Safe JSON/string handling  
- Fully typed (TypeScript ready)  
- Lightweight (no dependencies except Node crypto)

---

## 📦 Installation

```bash
npm install let-me-encrypt-ts
or
yarn add let-me-encrypt-ts

🧠 Usage
import { CipherService } from 'let-me-encrypt-ts';

const key = 'bbf3e354dbe8d1c92b748e8f67338a3f130aeda4796b702ad3043556e5ac2768';
const iv = 'e9211923c55ce6d82603098cd21437d2';

const data = { message: 'Hello, world!' };

// Encrypt
const encrypted = CipherService.encrypt(data, key, iv);
console.log('Encrypted:', encrypted);

// Decrypt
const decrypted = CipherService.decrypt(encrypted, key, iv);
console.log('Decrypted:', decrypted);


Output:

Encrypted: hJk2pQ...
Decrypted: { message: 'Hello, world!' }

🧩 API
CipherService.encrypt(data: unknown, key: string, iv: string): string

Encrypts a value (object or string) using AES-256-CBC.
Returns a base64-encoded ciphertext.

CipherService.decrypt(ciphertext: string, key: string, iv: string): any

Decrypts a base64-encoded string and automatically parses JSON if possible.

⚙️ Environment variables example

You can store your key and IV safely in .env:

LIB_CRYPTO_KEY=bbf3e354dbe8d1c92b748e8f67338a3f130aeda4796b702ad3043556e5ac2768
LIB_CRYPTO_IV=e9211923c55ce6d82603098cd21437d2


Then:

const key = process.env.LIB_CRYPTO_KEY!;
const iv = process.env.LIB_CRYPTO_IV!;

🧪 Testing
npm run test


Example test (cipher.service.spec.ts):

import { CipherService } from '../src/cipher.service';

describe('CipherService', () => {
  const key = 'bbf3e354dbe8d1c92b748e8f67338a3f130aeda4796b702ad3043556e5ac2768';
  const iv = 'e9211923c55ce6d82603098cd21437d2';

  it('should encrypt and decrypt correctly', () => {
    const data = { test: 'Hello AES' };
    const enc = CipherService.encrypt(data, key, iv);
    const dec = CipherService.decrypt(enc, key, iv);
    expect(dec).toEqual(data);
  });
});

🧱 Build
npm run build


The TypeScript output goes to dist/.