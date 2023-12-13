import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export type ExampleTransaction = {
  name: string;
  price: string;
};

export type CurrentExchangeRate = {
  name: string;
  currency: string;
  value: number;
  flag: string;
};

export type HomeContentData = ParsedContent & {
  description: string;
  supportedCurrency: string[];
  exampleMonthlyIncome: string;
  exampleTransactions: ExampleTransaction[];
  currentExchangeRate: CurrentExchangeRate[];
};
