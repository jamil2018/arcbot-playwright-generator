export interface Step {
  id: string;
  signature: string;
  properties: {
    name: string;
    value: string;
  }[];
  order: number;
}
