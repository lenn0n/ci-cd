export {};

declare global {
  interface Window {
    invoiceID: string;
    invoiceNum: string;
    invoiceStatus: string;
  }
}