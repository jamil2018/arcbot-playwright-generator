type ParameterType = "Text" | "Locator";

export interface StepParameters {
  id: string;
  name: string;
  type: ParameterType;
  inferParameterFromModuleName: boolean;
  value: string;
}
