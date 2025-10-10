declare module "aes-js" {
  namespace utils {
    const utf8: {
      toBytes(text: string): Uint8Array;
      fromBytes(bytes: Uint8Array): string;
    };

    const hex: {
      toBytes(hex: string): Uint8Array;
      fromBytes(bytes: Uint8Array): string;
    };
  }

  class ModeOfOperation {
    constructor();
  }

  namespace ModeOfOperation {
    class cbc {
      constructor(key: Uint8Array | Buffer, iv: Uint8Array | Buffer);
      encrypt(data: Uint8Array): Uint8Array;
      decrypt(data: Uint8Array): Uint8Array;
    }
  }

  export { utils, ModeOfOperation };
  const aesjs: { utils: typeof utils; ModeOfOperation: typeof ModeOfOperation };
  export default aesjs;
}
