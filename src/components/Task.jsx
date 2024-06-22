import Item from "@/components/ui/Item";
const Todos = ({ data, deleteTodo, updateTodo, updateTask }) => {
  return (
    <div className="mt-8 flex flex-col gap-4 min-h-[560px] w-full rounded-3xl .no-scrollbar">
      {data.map((todo, idx) => (
        <Item
          key={idx}
          task={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default Todos;
