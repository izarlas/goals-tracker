import GoalItem from "../components/GoalItem";
import { GoalState } from "../enums/GoalState";
import type { Goal } from "../types/Goal";

const GoalsGrid = () => {
  const mockGoals: Goal[] = [
    {
      id: 1,
      title: "Goal 1",
      weeksDuration: 10,
      state: GoalState.todo,
      description: "Consider it a priority",
    },
    { id: 2, title: "Goal 2", weeksDuration: 5, state: GoalState.inProgress },
  ];

  return (
    <div className="flex flex-col">
      {mockGoals.map((goal) => (
        <GoalItem goal={goal} />
      ))}
      <button className="border border-b-gray-500 rounded-md">Add goal</button>
    </div>
  );
};

export default GoalsGrid;
