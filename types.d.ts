declare module "node-pixel" {
  export class Strip {
    length: number;
    pixel(i: number): { 
      color(color: string): void 
    };
    constructor(args: any);
    color(color: string): void;
    show(): void;
    on(event: string, callback: () => void): void;
  }
}
