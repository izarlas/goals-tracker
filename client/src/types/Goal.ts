import type { GoalState } from "../enums/GoalState";

export type Goal = {
  id: number;
  title: string;
  weeksDuration: number;
  state: GoalState;
  description?: string;
};
