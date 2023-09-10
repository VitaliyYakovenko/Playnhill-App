
declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const content: any;
  export default content;
}