// file: To ignore the import error for Lottie files in components.

declare module "*.lottie" {
  const src: string;
  export default src;
}