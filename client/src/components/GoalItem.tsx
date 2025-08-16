import type { Goal } from "../types/Goal";

const GoalItem = ({ goal }: { goal: Goal }) => {
  return (
    <section
      key={goal.id}
      className="flex flex-col border border-amber-500 rounded-md my-1"
    >
      <span className="p-1">
        Title: {goal.title} | State: {goal.state} | Duration:&nbsp;
        {goal.weeksDuration}
        &nbsp;weeks
      </span>
      {goal.description ?? <span>{goal.description}</span>}
    </section>
  );
};

export default GoalItem;
