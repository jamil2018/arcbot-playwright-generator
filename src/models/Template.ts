import { Step } from "./Step";

export interface Template {
  id: string;
  name: string;
  module: string;
  description: string;
  steps: Step[];
}
