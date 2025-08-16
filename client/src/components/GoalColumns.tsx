import GoalColumnItem from "./GoalColumnItem";

const GoalColumns = () => {
  const columns: string[] = ["Todo", "In Progress", "Done"];
  return (
    <section className="flex justify-between items-center mt-1 mb-1">
      {columns.map((column, index) => (
        <GoalColumnItem key={index} title={column} />
      ))}
    </section>
  );
};

export default GoalColumns;
