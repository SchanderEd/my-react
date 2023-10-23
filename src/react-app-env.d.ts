/// <reference types="react-scripts" />

declare module "*.css" {
    const styles: { [key: string]: string };
    export = styles;
  }
  
  declare module '*.scss' {
    const resource: { [key: string]: string };
    export = resource;
  }
