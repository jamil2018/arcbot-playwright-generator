import { StepParameters } from "./StepParameters";

export interface Step {
  id: string;
  signature: string;
  module: string;
  order: number;
  parameters: StepParameters[];
}
