/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string; // Add your variables here
  // Add other variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
