/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PLUTO_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
