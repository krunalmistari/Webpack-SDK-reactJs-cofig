// src/declaration.d.ts
declare class Leegality {
  constructor(options: { callback: (response: any) => void; logoUrl?: string });

  init(): void;
  esign(url: string): void;
  cancel(): void;
}
