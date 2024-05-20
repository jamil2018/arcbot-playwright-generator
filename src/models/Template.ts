import { Step } from "./Step";

export interface Template {
  id: string;
  name: string;
  description: string;
  steps: Step[];
}
