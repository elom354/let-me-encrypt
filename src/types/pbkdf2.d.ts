declare module "pbkdf2" {
  namespace pbkdf2 {
    function pbkdf2Sync(
      password: string | Buffer,
      salt: string | Buffer,
      iterations: number,
      keylen: number,
      digest: string,
    ): Buffer;

    function pbkdf2(
      password: string | Buffer,
      salt: string | Buffer,
      iterations: number,
      keylen: number,
      digest: string,
      callback: (err: Error | null, derivedKey: Buffer) => void,
    ): void;
  }

  export = pbkdf2;
}
