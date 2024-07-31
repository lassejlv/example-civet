interface Env {
  readonly TURSO_URL: string;
  readonly TURSO_TOKEN: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
