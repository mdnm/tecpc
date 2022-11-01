declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  export const { ReactComponent };
}

/// <reference types="vite/client" />
