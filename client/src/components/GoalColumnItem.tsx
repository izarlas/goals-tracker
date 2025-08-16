const GoalColumnItem = ({ title }: { title: string }) => {
  return (
    <div className="border border-b-cyan-700 flex items-center w-full justify-center">
      {title}
    </div>
  );
};

export default GoalColumnItem;
