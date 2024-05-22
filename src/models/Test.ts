import { Template } from "./Template";

export interface Test {
  id: string;
  name: string;
  tags: string[];
  description: string;
  template: Template;
}
